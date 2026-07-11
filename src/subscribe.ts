import 'dotenv/config';

async function subscribe() {
  const token = process.env.IG_ACCESS_TOKEN;
  const accountId = process.env.IG_ACCOUNT_ID;
  // Subscribe to comments and messages
  const res = await fetch(
    `https://graph.instagram.com/v21.0/${accountId}/subscribed_apps?subscribed_fields=messages,comments&access_token=${token}`,
    { method: 'POST' }
  );
  const data = await res.json();
  console.log(JSON.stringify(data));
}
subscribe().catch(console.error);
