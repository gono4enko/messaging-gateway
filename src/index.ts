import 'dotenv/config';
import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 8086;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Privacy Policy (expanded for Meta validation — must contain GDPR sections, data collection, usage, rights, contact)
app.get('/privacy', (_req, res) => {
  res.type('html').send(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Privacy Policy — Comfort House</title><style>body{font-family:system-ui,sans-serif;max-width:800px;margin:40px auto;padding:0 20px;line-height:1.6;color:#333}h1{font-size:1.5em}h2{font-size:1.2em;margin-top:1.5em}p,li{margin-bottom:0.5em}</style></head><body>
<h1>Privacy Policy</h1>
<p><strong>Effective Date:</strong> July 11, 2026<br><strong>Company:</strong> Comfort House (Комфорт Хаус)<br><strong>Contact:</strong> <a href="mailto:info@pergolarussia.ru">info@pergolarussia.ru</a></p>

<h2>1. Introduction</h2>
<p>Comfort House ("we", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our online calculators, interact with our messaging bots on Instagram, Telegram, and WhatsApp, or otherwise engage with our services. By using our services, you consent to the practices described in this Privacy Policy.</p>

<h2>2. Information We Collect</h2>
<p><strong>2.1 Information You Provide:</strong> full name, email address, phone number, physical address, order details, product configurations, measurements, color and material choices, messages sent through our Instagram Direct, Telegram, and WhatsApp bots.</p>
<p><strong>2.2 Information Collected Automatically:</strong> IP address, browser type, operating system, device identifiers, pages visited, time spent, click patterns, calculator inputs and results, server logs.</p>
<p><strong>2.3 Information From Third Parties:</strong> profile information from Meta (Instagram, WhatsApp) and Telegram; usage statistics from Yandex.Metrika analytics; delivery status from logistics partners.</p>

<h2>3. How We Use Your Information</h2>
<ul>
<li>To operate our website, calculators, and messaging bots</li>
<li>To process orders and arrange delivery and installation</li>
<li>To respond to inquiries and send order updates</li>
<li>To provide accurate pricing through our online calculators</li>
<li>To analyze usage patterns and improve our services</li>
<li>To send marketing communications with your consent</li>
<li>To comply with tax, accounting, and consumer protection laws</li>
<li>To prevent fraud and protect service security</li>
</ul>

<h2>4. Legal Basis for Processing (GDPR)</h2>
<ul>
<li><strong>Consent:</strong> when you agree to receive marketing communications or use messaging bots</li>
<li><strong>Contract performance:</strong> to fulfill orders and deliver services</li>
<li><strong>Legitimate interests:</strong> website improvement, fraud prevention, service optimization</li>
<li><strong>Legal obligation:</strong> tax records, accounting, consumer protection compliance</li>
</ul>

<h2>5. How We Share Your Information</h2>
<p>We do not sell your personal information. We may share data only with:</p>
<ul>
<li><strong>Service providers:</strong> delivery companies, installation teams, payment processors, cloud hosting — contractually bound to use data only for specified purposes</li>
<li><strong>Messaging platforms:</strong> Meta Platforms Inc. (Instagram, WhatsApp), Telegram FZ-LLC — to enable bot functionality</li>
<li><strong>Analytics services:</strong> Yandex.Metrika (Yandex LLC) — for website usage analysis</li>
<li><strong>Legal requirements:</strong> when required by law, court order, or to protect legal rights and safety</li>
</ul>

<h2>6. Data Security</h2>
<p>We implement appropriate technical and organizational security measures:</p>
<ul>
<li>All data transmission encrypted using HTTPS/TLS</li>
<li>Personal data stored on secure servers with access controls</li>
<li>Access restricted to authorized employees</li>
<li>Regular security reviews and updates</li>
<li>Payment information processed by secure third-party processors; we do not store credit card data</li>
</ul>

<h2>7. Data Retention</h2>
<ul>
<li><strong>Order data:</strong> retained 5 years after completion for accounting and warranty</li>
<li><strong>Communication records:</strong> 12 months after last interaction, or longer with active orders</li>
<li><strong>Marketing consent:</strong> until withdrawn or 12 months of inactivity</li>
</ul>
<p>After retention periods, data is securely deleted or anonymized.</p>

<h2>8. Your Rights and Choices</h2>
<p>You may have the following rights regarding your personal data:</p>
<ul>
<li><strong>Right to access:</strong> request a copy of data we hold about you</li>
<li><strong>Right to rectification:</strong> request correction of inaccurate data</li>
<li><strong>Right to erasure:</strong> request deletion of your data</li>
<li><strong>Right to restrict processing:</strong> request we stop processing your data</li>
<li><strong>Right to data portability:</strong> receive your data in a machine-readable format</li>
<li><strong>Right to object:</strong> object to processing for legitimate interests or marketing</li>
<li><strong>Right to withdraw consent:</strong> withdraw at any time</li>
<li><strong>Right to lodge a complaint:</strong> with a data protection authority</li>
</ul>
<p>To exercise these rights, contact us at <a href="mailto:info@pergolarussia.ru">info@pergolarussia.ru</a>. We will respond within 30 days.</p>

<h2>9. Cookies</h2>
<ul>
<li><strong>Essential cookies:</strong> required for calculator and site operation</li>
<li><strong>Analytics cookies:</strong> Yandex.Metrika for usage analysis</li>
<li><strong>Marketing cookies:</strong> for relevant content delivery (with consent)</li>
</ul>
<p>Manage cookie preferences through your browser settings.</p>

<h2>10. International Data Transfers</h2>
<p>Your data may be processed in countries other than your country of residence. We ensure appropriate safeguards for international transfers.</p>

<h2>11. Third-Party Links</h2>
<p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>

<h2>12. Children's Privacy</h2>
<p>Our services are not directed to children under 16. We do not knowingly collect data from children.</p>

<h2>13. Changes to This Policy</h2>
<p>We may update this Privacy Policy to reflect changes in practices, technology, or legal requirements. Material changes will be notified by posting the updated policy with a new effective date.</p>

<h2>14. Contact Us</h2>
<p><strong>Comfort House (Комфорт Хаус)</strong><br>
Email: <a href="mailto:info@pergolarussia.ru">info@pergolarussia.ru</a><br>
Website: <a href="https://pergolarussia.ru">pergolarussia.ru</a></p>
</body></html>`);
});

// Terms of Service
app.get('/terms', (_req, res) => {
  res.type('html').send(`<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><title>Пользовательское соглашение — Comfort House</title><style>body{font-family:system-ui,sans-serif;max-width:800px;margin:40px auto;padding:0 20px;line-height:1.6;color:#333}h1{font-size:1.5em}h2{font-size:1.2em;margin-top:1.5em}</style></head><body>
<h1>Пользовательское соглашение</h1>
<p><strong>Компания:</strong> Комфорт Хаус<br><strong>Дата:</strong> 11 июля 2026 г.</p>
<h2>1. Общие условия</h2>
<p>Сайт pergolarussia.ru предоставляет информацию о продукции. Цены не являются публичной офертой.</p>
<h2>2. Калькуляторы</h2>
<p>Расчёты предварительные. Итоговая стоимость — после замера.</p>
<h2>3. Мессенджер-боты</h2>
<p>Боты обрабатывают запросы автоматически.</p>
<h2>4. Контакты</h2>
<p>Email: <a href="mailto:info@pergolarussia.ru">info@pergolarussia.ru</a></p>
</body></html>`);
});

// Data deletion instructions
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
