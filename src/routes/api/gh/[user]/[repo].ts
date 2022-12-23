// proxy to github api because unauthenticated requests have a tough rate limit
// https://developer.github.com/v3/#rate-limiting

import { APIEvent } from "solid-start";
import env from '~/env/server';

// all lowercase
const ALLOW_LIST = [
  ["itzderock", "discord-html-transcripts"],
  ["poroscout", "website"],
  ["itzderock", "derock.dev"]
]

export async function GET({ params }: APIEvent) {
  // validate params
  if (!params.repo || !params.user) {
    return new Response("Invalid params", { status: 400 });
  }

  // lowercase
  const repo = params.repo.toLowerCase();
  const user = params.user.toLowerCase();

  // check if allowed
  if (!ALLOW_LIST.some(([u, r]) => u === user && r === repo)) {
    return new Response("Not allowed", { status: 403 });
  }

  // fetch
  const response = await fetch(`https://api.github.com/repos/${encodeURIComponent(user)}/${encodeURIComponent(repo)}`, {
    headers: {
      "Accept": "application/vnd.github.v3+json",
      "User-Agent": "ItzDerock/derock.dev",
      "Authorization": `token ${env.GITHUB_PAT}` 
    }
  });

  // return response
  return new Response(response.body, {
    headers: {
      "Content-Type": "application/json",

      // cache: public, max age of 1 day (stale after 1 hour)
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    }
  });
}