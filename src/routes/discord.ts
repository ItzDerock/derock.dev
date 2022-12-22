const LINK = `https://discord.gg/NqqtkS7ekj`;

export function GET() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: LINK,
    }
  });
}