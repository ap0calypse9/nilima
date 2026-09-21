import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// One-time setup: run this once in the Vercel dashboard's Postgres
// "Query" tab (Storage > your DB > Query), or via any Postgres client
// connected with the POSTGRES_URL from your Vercel env vars:
//
// CREATE TABLE IF NOT EXISTS comments (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL,
//   message TEXT NOT NULL,
//   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
// );

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT id, name, message, created_at
      FROM comments
      ORDER BY created_at DESC
      LIMIT 100;
    `;
    return NextResponse.json({ comments: rows });
  } catch (error) {
    console.error("GET /api/comments failed:", error);
    return NextResponse.json({ error: "Failed to load comments" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required" }, { status: 400 });
    }
    if (name.length > 100 || message.length > 1000) {
      return NextResponse.json({ error: "Name or message too long" }, { status: 400 });
    }

    const { rows } = await sql`
      INSERT INTO comments (name, message)
      VALUES (${name}, ${message})
      RETURNING id, name, message, created_at;
    `;

    return NextResponse.json({ comment: rows[0] }, { status: 201 });
  } catch (error) {
    console.error("POST /api/comments failed:", error);
    return NextResponse.json({ error: "Failed to post comment" }, { status: 500 });
  }
}