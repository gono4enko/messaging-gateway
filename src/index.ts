import 'dotenv/config';
import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 8086;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use(express.json());

// Meta webhook verification
app.get('/webhooks/instagram', (req, res) => {
  if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === process.env.IG_VERIFY_TOKEN) {
    return res.status(200).send(req.query['hub.challenge']);
  }
  res.sendStatus(403);
});

// Webhook receiver
app.post('/webhooks/instagram', async (req, res) => {
  console.log('ig webhook:', JSON.stringify(req.body).slice(0, 500));
  // TODO: route to botBrain.ts, reply back via IG API
  res.sendStatus(200);
});

// Webhook receiver — WhatsApp (stub)
app.post('/webhooks/whatsapp', (req, res) => {
  console.log('wa webhook:', JSON.stringify(req.body).slice(0, 500));
  res.sendStatus(200);
});

app.listen(port, () => console.log(`messaging-gateway on :${port}`));
