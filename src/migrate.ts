import 'dotenv/config';
import { Pool } from 'pg';

async function migrate() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  await pool.query(`
    CREATE TABLE IF NOT EXISTS mg_messages (
      id SERIAL PRIMARY KEY, channel TEXT, direction TEXT, external_user_id TEXT,
      text TEXT, meta JSONB, created_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS mg_comments (
      id SERIAL PRIMARY KEY, media_id TEXT, comment_id TEXT, username TEXT,
      text TEXT, replied BOOLEAN DEFAULT false, created_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS mg_ig_account_stats (
      id SERIAL PRIMARY KEY, followers INT, follows INT, media_count INT,
      captured_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS mg_ig_media_stats (
      id SERIAL PRIMARY KEY, media_id TEXT, like_count INT, comments_count INT,
      reach INT, impressions INT, captured_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS mg_tokens (
      id SERIAL PRIMARY KEY, name TEXT UNIQUE, value TEXT, updated_at TIMESTAMPTZ DEFAULT now()
    );
  `);
  await pool.end();
  console.log('migration done');
}
migrate().catch(e => { console.error(e); process.exit(1); });
