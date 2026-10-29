'use client';
import { useEffect, useMemo, useState } from 'react';

const SHEET_ID = '1N4u9R0xD5T1-4DgL0qElq4vPgipsb3UExotrQBjNZAA';
const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScVMOiETdfvtAYucHLJpNlGnylg6efhxcuNoZ7m5hkRhOvhvw/formResponse';
const NAME_FIELD = 'entry.540688725';
const COMMENT_FIELD = 'entry.254764137';
const REFRESH_MS = 30000;
const PAGE_SIZE = 5;

type Comment = { time: string; ts: number | null; name: string; text: string; pending?: boolean };

// Brand colours only: aqua, green and their darker shades
const colors = ['var(--blueprint)', 'var(--green)', '#1c7ea6', '#4d8a1f'];
const colorFor = (s: string) =>
  colors[[...s].reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length];

const mono = { fontFamily: 'var(--font-dm-mono)' } as const;

// gviz returns dates as "Date(2026,9,12,14,3,22)" (month is 0-indexed)
function parseSheetDate(v: unknown): number | null {
  if (typeof v !== 'string') return null;
  const m = v.match(/Date\((\d+),(\d+),(\d+)(?:,(\d+),(\d+),(\d+))?\)/);
  if (!m) return null;
  const [, y, mo, d, h = '0', mi = '0', s = '0'] = m;
  return new Date(+y, +mo, +d, +h, +mi, +s).getTime();
}

function timeAgo(ts: number | null, fallback: string) {
  if (ts === null) return fallback;
  const sec = Math.max(0, Math.floor((Date.now() - ts) / 1000));
  if (sec < 60) return 'just now';
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min} min ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} hr ago`;
  const day = Math.floor(hr / 24);
  if (day < 30) return `${day} day${day > 1 ? 's' : ''} ago`;
  return new Date(ts).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}

const inputClass =
  'w-full border border-[var(--line)] bg-white px-3 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--blueprint)]';

export default function Comments() {
  const [list, setList] = useState<Comment[]>([]);
  const [pending, setPending] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [trap, setTrap] = useState(''); // honeypot, bots fill this
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [posting, setPosting] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);

  async function load() {
    try {
      const q = encodeURIComponent('select A,B,C order by A desc limit 200');
      const res = await fetch(
        `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tq=${q}&headers=1`
      );
      const raw = await res.text();
      const match = raw.match(/setResponse\(([\s\S]*)\);?\s*$/);
      if (!match) throw new Error('Bad response. Is the sheet public?');
      const json = JSON.parse(match[1]);
      const rows: Comment[] = (json.table.rows || []).map((r: any) => ({
        time: r.c[0]?.f ?? '',
        ts: parseSheetDate(r.c[0]?.v),
        name: r.c[1]?.v ?? 'Anonymous',
        text: r.c[2]?.v ?? '',
      }));
      setList(rows);
      // drop pending comments that have arrived from the sheet
      setPending((p) =>
        p.filter((x) => !rows.some((r) => r.name === x.name && r.text === x.text))
      );
      setError('');
    } catch (e: any) {
      setError(e.message || 'Could not load comments');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    const t = setInterval(load, REFRESH_MS);
    return () => clearInterval(t);
  }, []);

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (trap || !text.trim() || posting) return;
    setPosting(true);
    const mine: Comment = {
      time: 'just now',
      ts: Date.now(),
      name: name.trim() || 'Anonymous',
      text: text.trim(),
      pending: true,
    };
    setPending((p) => [mine, ...p]);
    setText('');
    try {
      await fetch(FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          [NAME_FIELD]: mine.name,
          [COMMENT_FIELD]: mine.text,
        }),
      });
      setTimeout(load, 3000);
    } finally {
      setPosting(false);
    }
  }

  const all = useMemo(() => [...pending, ...list], [pending, list]);
  const shown = all.slice(0, visible);
  const remaining = all.length - shown.length;

  // stable keys so new comments animate in and old ones don't re-animate
  const keyed = useMemo(() => {
    const seen = new Map<string, number>();
    return shown.map((c) => {
      const base = `${c.ts ?? c.time}|${c.name}|${c.text}`;
      const n = (seen.get(base) ?? 0) + 1;
      seen.set(base, n);
      return { c, key: `${base}#${n}` };
    });
  }, [shown]);

  const previewName = name.trim() || 'Anonymous';

  return (
    <section className="relative bg-[var(--paper)] py-24 text-[var(--ink)] md:py-32">
      <div className="page-grid">
        {/* Header */}
        <div className="col-span-12 flex items-end gap-5">
          <h3 className="text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
            Comments.
          </h3>
          {all.length > 0 && (
            <span
              className="mb-2 px-2.5 py-1 text-xs font-bold text-white"
              style={{ ...mono, backgroundColor: 'var(--blueprint)' }}
            >
              {String(all.length).padStart(2, '0')}
            </span>
          )}
        </div>

        <div className="col-span-12 mt-10">
          <div className="dimension-line" />
        </div>

        <div className="col-span-12 mt-14 grid grid-cols-1 gap-14 md:grid-cols-12">
          {/* Form */}
          <div className="relative md:col-span-5">
            <div className="pointer-events-none absolute -inset-x-5 -inset-y-5 -z-10 hidden md:block hatch-blueprint" />

            <form onSubmit={submit} className="relative space-y-5 border border-[var(--line)] bg-white p-6">
              {[
                'left-2 top-2 border-l border-t',
                'right-2 top-2 border-r border-t',
                'left-2 bottom-2 border-l border-b',
                'right-2 bottom-2 border-r border-b',
              ].map((position) => (
                <span
                  key={position}
                  className={`pointer-events-none absolute h-3 w-3 ${position}`}
                  style={{ borderColor: 'var(--blueprint)' }}
                />
              ))}

              <span className="block h-[3px] w-10" style={{ backgroundColor: 'var(--green)' }} />

              <div>
                <label
                  htmlFor="cm-name"
                  className="block text-xs uppercase tracking-wide text-[var(--graphite)]"
                  style={mono}
                >
                  Name
                </label>
                <div className="mt-2 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center text-sm font-bold text-white"
                    style={{ ...mono, backgroundColor: colorFor(previewName) }}
                  >
                    {previewName.charAt(0).toUpperCase()}
                  </div>
                  <input
                    id="cm-name"
                    className={inputClass}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    maxLength={40}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cm-text"
                  className="block text-xs uppercase tracking-wide text-[var(--graphite)]"
                  style={mono}
                >
                  Comment
                </label>
                <textarea
                  id="cm-text"
                  className={`${inputClass} mt-2 resize-none`}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => {
                    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') submit();
                  }}
                  placeholder="Share your experience working with us"
                  rows={4}
                  maxLength={500}
                />
              </div>

              <input
                value={trap}
                onChange={(e) => setTrap(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px' }}
              />

              <div className="flex items-center justify-between gap-4">
                <small className="text-[11px] text-[var(--graphite)]" style={mono}>
                  {text.length}/500 · Ctrl+Enter
                </small>
                <button
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ backgroundColor: 'var(--blueprint)' }}
                  disabled={!text.trim() || posting}
                >
                  {posting ? 'Posting…' : 'Post comment'}
                </button>
              </div>
            </form>
          </div>

          {/* List */}
          <div className="md:col-span-7">
            {loading && (
              <div>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex gap-4 border-b border-[var(--line)] py-6">
                    <div className="cm-skel h-10 w-10 shrink-0" />
                    <div className="flex-1">
                      <div className="cm-skel h-3" style={{ width: '30%' }} />
                      <div className="cm-skel mt-3 h-3" style={{ width: '80%' }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {error && (
              <p className="text-sm text-[var(--graphite)]" style={mono}>
                {error}
              </p>
            )}

            {!loading && !error && all.length === 0 && (
              <p className="text-sm italic text-[var(--graphite)]">
                No comments yet — be the first to share your experience.
              </p>
            )}

            <div>
              {keyed.map(({ c, key }) => (
                <article
                  key={key}
                  className={`cm-in flex gap-4 border-b border-[var(--line)] py-6 first:pt-0 ${
                    c.pending ? 'opacity-60' : ''
                  }`}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center text-sm font-bold text-white"
                    style={{ ...mono, backgroundColor: colorFor(c.name) }}
                  >
                    {c.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-[var(--ink)]">{c.name}</p>
                      <p className="text-[11px] text-[var(--graphite)]" style={mono}>
                        {c.pending ? 'Posting…' : timeAgo(c.ts, c.time)}
                      </p>
                    </div>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[var(--graphite)] [overflow-wrap:anywhere]">
                      {c.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {(remaining > 0 || visible > PAGE_SIZE) && (
              <div className="mt-8">
                {remaining > 0 && (
                  <button
                    type="button"
                    className="border-b border-[var(--ink)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  >
                    Show more ({remaining})
                  </button>
                )}
                {visible > PAGE_SIZE && remaining <= 0 && (
                  <button
                    type="button"
                    className="border-b border-[var(--ink)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
                    onClick={() => setVisible(PAGE_SIZE)}
                  >
                    Show less
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Plain <style> (not styled-jsx) to avoid the Turbopack issue */}
      <style>{`
        .cm-skel {
          background: linear-gradient(90deg, rgba(10,10,10,.05), rgba(41,171,226,.16), rgba(10,10,10,.05));
          background-size: 200% 100%;
          animation: cmShimmer 1.4s infinite;
        }
        .cm-in { animation: cmIn .35s ease both; }
        @keyframes cmIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes cmShimmer { from { background-position: 200% 0; } to { background-position: -200% 0; } }
        @media (prefers-reduced-motion: reduce) { .cm-in, .cm-skel { animation: none; } }
      `}</style>
    </section>
  );
}