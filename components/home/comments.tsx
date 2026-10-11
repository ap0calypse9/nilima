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

const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ef4444'];
const colorFor = (s: string) =>
  colors[[...s].reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length];

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
    <section className="cm-wrap">
      <header className="cm-head">
        <h3 className="cm-title">Comments</h3>
        {all.length > 0 && <span className="cm-count">{all.length}</span>}
      </header>

      <form onSubmit={submit} className="cm-form">
        <div className="cm-form-top">
          <div className="cm-avatar" style={{ background: colorFor(previewName) }}>
            {previewName.charAt(0).toUpperCase()}
          </div>
          <input
            className="cm-input cm-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            maxLength={40}
          />
        </div>
        <textarea
          className="cm-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') submit();
          }}
          placeholder="Share your thoughts..."
          rows={3}
          maxLength={500}
        />
        <input
          value={trap}
          onChange={(e) => setTrap(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px' }}
        />
        <div className="cm-row">
          <small className="cm-muted">
            {text.length}/500 · Ctrl+Enter to post
          </small>
          <button className="cm-btn" disabled={!text.trim() || posting}>
            {posting ? 'Posting...' : 'Post comment'}
          </button>
        </div>
      </form>

      {loading && (
        <div className="cm-list">
          {[0, 1, 2].map((i) => (
            <div key={i} className="cm-card cm-skel">
              <div className="cm-avatar cm-skel-block" />
              <div className="cm-body">
                <div className="cm-skel-block cm-skel-line" style={{ width: '30%' }} />
                <div className="cm-skel-block cm-skel-line" style={{ width: '80%' }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && <p className="cm-error">{error}</p>}

      {!loading && !error && all.length === 0 && (
        <div className="cm-empty">
          <div className="cm-empty-icon">💬</div>
          <p>No comments yet. Start the conversation!</p>
        </div>
      )}

      <div className="cm-list">
        {keyed.map(({ c, key }) => (
          <article key={key} className={`cm-card ${c.pending ? 'cm-pending' : ''}`}>
            <div className="cm-avatar" style={{ background: colorFor(c.name) }}>
              {c.name.charAt(0).toUpperCase()}
            </div>
            <div className="cm-body">
              <div className="cm-meta">
                <b>{c.name}</b>
                <span className="cm-muted">
                  {c.pending ? 'Posting...' : timeAgo(c.ts, c.time)}
                </span>
              </div>
              <p>{c.text}</p>
            </div>
          </article>
        ))}
      </div>

      {(remaining > 0 || visible > PAGE_SIZE) && (
        <div className="cm-more">
          {remaining > 0 && (
            <button type="button" className="cm-ghost" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              Show more ({remaining})
            </button>
          )}
          {visible > PAGE_SIZE && remaining <= 0 && (
            <button type="button" className="cm-ghost" onClick={() => setVisible(PAGE_SIZE)}>
              Show less
            </button>
          )}
        </div>
      )}

      <style>{`
        .cm-wrap { --cm-accent: #6366f1; --cm-line: rgba(128,128,128,.28); --cm-soft: rgba(128,128,128,.08);
          max-width: 680px; margin: 48px auto; padding: 0 16px; font-family: inherit; }
        .cm-head { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
        .cm-title { margin: 0; font-size: 1.4rem; }
        .cm-count { background: var(--cm-accent); color: #fff; font-size: .78rem; font-weight: 700;
          padding: 2px 10px; border-radius: 999px; }

        .cm-form { position: relative; display: flex; flex-direction: column; gap: 10px; padding: 16px;
          border: 1px solid var(--cm-line); border-radius: 16px; background: var(--cm-soft); margin-bottom: 28px; }
        .cm-form-top { display: flex; align-items: center; gap: 10px; }
        .cm-input { width: 100%; box-sizing: border-box; padding: 10px 14px; border-radius: 12px;
          border: 1px solid var(--cm-line); background: transparent; color: inherit; font: inherit;
          resize: vertical; transition: border-color .15s, box-shadow .15s; }
        .cm-input:focus { outline: none; border-color: var(--cm-accent); box-shadow: 0 0 0 3px rgba(99,102,241,.25); }
        .cm-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
        .cm-btn { padding: 9px 20px; border: 0; border-radius: 999px; background: var(--cm-accent); color: #fff;
          font-weight: 600; cursor: pointer; transition: transform .12s, opacity .2s, box-shadow .2s; }
        .cm-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(99,102,241,.35); }
        .cm-btn:disabled { opacity: .4; cursor: not-allowed; }

        .cm-list { display: flex; flex-direction: column; gap: 12px; }
        .cm-card { display: flex; gap: 12px; padding: 14px 16px; border-radius: 14px;
          border: 1px solid var(--cm-line); animation: cmIn .35s ease both;
          transition: background .2s, transform .2s; }
        .cm-card:hover { background: var(--cm-soft); }
        .cm-pending { opacity: .65; border-style: dashed; }
        .cm-avatar { flex: none; width: 40px; height: 40px; border-radius: 50%; color: #fff;
          display: grid; place-items: center; font-weight: 700; font-size: 1rem; }
        .cm-body { min-width: 0; flex: 1; }
        .cm-meta { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
        .cm-meta span { font-size: .78rem; }
        .cm-body p { margin: 4px 0 0; line-height: 1.5; white-space: pre-wrap; overflow-wrap: anywhere; }

        .cm-more { display: flex; justify-content: center; margin-top: 16px; }
        .cm-ghost { padding: 8px 20px; border-radius: 999px; border: 1px solid var(--cm-line);
          background: transparent; color: inherit; font: inherit; cursor: pointer; transition: background .2s, border-color .2s; }
        .cm-ghost:hover { background: var(--cm-soft); border-color: var(--cm-accent); }

        .cm-empty { text-align: center; padding: 32px 0; opacity: .7; }
        .cm-empty-icon { font-size: 2rem; margin-bottom: 6px; }
        .cm-muted { opacity: .6; }
        .cm-error { color: #ef4444; }

        .cm-skel-block { background: linear-gradient(90deg, var(--cm-soft), rgba(128,128,128,.22), var(--cm-soft));
          background-size: 200% 100%; animation: cmShimmer 1.4s infinite; border-radius: 8px; }
        .cm-skel .cm-avatar { background: none; }
        .cm-skel-line { height: 12px; margin: 8px 0; }

        @keyframes cmIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes cmShimmer { from { background-position: 200% 0; } to { background-position: -200% 0; } }
        @media (prefers-reduced-motion: reduce) { .cm-card, .cm-skel-block { animation: none; } }
        @media (max-width: 480px) { .cm-card { padding: 12px; } .cm-avatar { width: 34px; height: 34px; } }
      `}</style>
    </section>
  );
}