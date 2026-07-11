import 'dotenv/config';
import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 8086;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Data deletion instructions (required by Meta for app publishing)
app.get('/data-deletion', (_req, res) => {
  res.type('html').send(`<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><title>Удаление данных пользователей — Comfort House</title><style>body{font-family:system-ui,sans-serif;max-width:800px;margin:40px auto;padding:0 20px;line-height:1.6;color:#333}h1{font-size:1.5em}h2{font-size:1.2em;margin-top:1.5em}</style></head><body>
<h1>Удаление данных пользователей</h1>
<p><strong>Компания:</strong> Комфорт Хаус (Comfort House)<br>
<strong>Дата обновления:</strong> 11 июля 2026 г.</p>

<h2>Как удалить ваши данные</h2>
<p>Если вы хотите удалить свои персональные данные из нашей базы, вы можете:</p>
<ul>
<li>Отправить запрос на email: <a href="mailto:info@pergolarussia.ru">info@pergolarussia.ru</a></li>
<li>Написать нам в любой из мессенджеров (Instagram, Telegram, WhatsApp) с просьбой удалить данные</li>
<li>Позвонить по телефону, указанному на сайте <a href="https://pergolarussia.ru">pergolarussia.ru</a></li>
</ul>

<h2>Что мы удаляем</h2>
<ul>
<li>Имя и фамилию</li>
<li>Номер телефона</li>
<li>Историю сообщений в ботах (Instagram Direct, Telegram, WhatsApp)</li>
<li>Параметры расчётов (размеры, конфигурации)</li>
</ul>

<h2>Сроки удаления</h2>
<p>Мы обрабатываем запросы на удаление в течение 30 дней.</p>

<h2>Автоматическое удаление</h2>
<p>Данные, не связанные с активным заказом, удаляются автоматически через 12 месяцев после последнего взаимодействия.</p>

<h2>Контакты</h2>
<p>Email: <a href="mailto:info@pergolarussia.ru">info@pergolarussia.ru</a><br>
Сайт: <a href="https://pergolarussia.ru">pergolarussia.ru</a></p>
</body></html>`);
});

app.get('/health', (_req, res) => res.json({ ok: true }));
app.get('/', (_req, res) => res.json({ service: 'messaging-gateway', status: 'running' }));

// Meta webhook verification
app.get('/webhooks/instagram', (req, res) => {
  if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === process.env.IG_VERIFY_TOKEN) {
    // ponytail: Meta requires text/plain, not HTML
    return res.status(200).type('text/plain').send(req.query['hub.challenge']);
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
