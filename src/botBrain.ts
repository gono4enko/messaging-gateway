// ponytail: stub until Bot Brain contract confirmed
export async function getReply(channel: string, userId: string, text: string, meta?: any): Promise<string> {
  const url = process.env.BOT_BRAIN_URL || '';
  if (!url) return 'stub: BOT_BRAIN_URL not set';
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.BOT_BRAIN_SECRET}` },
    body: JSON.stringify({ channel, userId, text, meta }),
  });
  const data = await res.json() as any;
  return data.reply || 'ok';
}
