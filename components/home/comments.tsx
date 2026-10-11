'use client';
import { useEffect, useState } from 'react';

const SHEET_ID = '1N4u9R0xD5T1-4DgL0qElq4vPgipsb3UExotrQBjNZAA';
const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScVMOiETdfvtAYucHLJpNlGnylg6efhxcuNoZ7m5hkRhOvhvw/formResponse';
const NAME_FIELD = 'entry.540688725';
const COMMENT_FIELD = 'entry.254764137';
const REFRESH_MS = 30000;

type Comment = { time: string; name: string; text: string };

const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ef4444'];
const colorFor = (s: string) =>
  colors[[...s].reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length];

export default function Comments() {
  const [list, setList] = useState<Comment[]>([]);
  const [pending, setPending] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [trap, setTrap] = useState(''); // honeypot, bots fill this
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [posting, setPosting] = useState(false);

  async function load() {
    try {
      const q = encodeURIComponent('select A,B,C order by A desc limit 50');
      const res = await fetch(
        `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tq=${q}&headers=1`
      );
      const raw = await res.text();
const match = raw.match(/setResponse\(([\s\S]*)\);?\s*$/);
      if (!match) throw new Error('Bad response. Is the sheet public?');
      const json = JSON.parse(match[1]);
      const rows: Comment[] = (json.table.rows || []).map((r: any) => ({
        time: r.c[0]?.f ?? '',
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

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (trap || !text.trim() || posting) return;
    setPosting(true);
    const mine: Comment = {
      time: 'just now',
      name: name.trim() || 'Anonymous',
      text: text.trim(),
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

  const all = [...pending, ...list];

  return (
    <section className="cm-wrap">
      <h3 className="cm-title">Comments {all.length > 0 && <span>({all.length})</span>}</h3>

      <form onSubmit={submit} className="cm-form">
        <input
          className="cm-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          maxLength={40}
        />
        <textarea
          className="cm-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
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
          <small>{text.length}/500</small>
          <button className="cm-btn" disabled={!text.trim() || posting}>
            {posting ? 'Posting...' : 'Post comment'}
          </button>
        </div>
      </form>

      {loading && <p className="cm-muted">Loading comments...</p>}
      {error && <p className="cm-error">{error}</p>}
      {!loading && !error && all.length === 0 && (
        <p className="cm-muted">No comments yet. Be the first!</p>
      )}

      <div className="cm-list">
        {all.map((c, i) => (
          <div key={i} className="cm-card">
            <div className="cm-avatar" style={{ background: colorFor(c.name) }}>
              {c.name.charAt(0).toUpperCase()}
            </div>
            <div className="cm-body">
              <div>
                <b>{c.name}</b> <small className="cm-muted">{c.time}</small>
              </div>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .cm-wrap { max-width: 640px; margin: 40px auto; padding: 0 16px; font-family: inherit; }
        .cm-title { margin-bottom: 16px; }
        .cm-title span { opacity: .5; font-weight: 400; }
        .cm-form { display: flex; flex-direction: column; gap: 10px; position: relative; margin-bottom: 24px; }
        .cm-input { padding: 10px 12px; border-radius: 10px; border: 1px solid rgba(128,128,128,.4);
          background: transparent; color: inherit; font: inherit; resize: vertical; }
        .cm-input:focus { outline: 2px solid #6366f1; border-color: transparent; }
        .cm-row { display: flex; justify-content: space-between; align-items: center; }
        .cm-btn { padding: 8px 18px; border: 0; border-radius: 999px; background: #6366f1; color: #fff;
          font-weight: 600; cursor: pointer; transition: transform .1s, opacity .2s; }
        .cm-btn:hover:not(:disabled) { transform: translateY(-1px); }
        .cm-btn:disabled { opacity: .4; cursor: not-allowed; }
        .cm-list { display: flex; flex-direction: column; gap: 12px; }
        .cm-card { display: flex; gap: 12px; padding: 12px; border-radius: 12px;
          border: 1px solid rgba(128,128,128,.25); animation: cmIn .35s ease; }
        .cm-avatar { flex: none; width: 38px; height: 38px; border-radius: 50%; color: #fff;
          display: grid; place-items: center; font-weight: 700; }
        .cm-body p { margin: 4px 0 0; white-space: pre-wrap; word-break: break-word; }
        .cm-muted { opacity: .6; }
        .cm-error { color: #ef4444; }
        @keyframes cmIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}