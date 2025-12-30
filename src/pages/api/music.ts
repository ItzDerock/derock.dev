import * as env from "astro:env/server";
import type { KoitoScrobble } from "~/external/scrobblers/Koito";
import { KoitoScrobblerClient } from "~/external/scrobblers/Koito";
import type { LocalLastFMData } from "~/external/scrobblers/LastFM";
import { LastFMScrobblerClient } from "~/external/scrobblers/LastFM";

const koito = new KoitoScrobblerClient("https://music.derock.dev");
const lastfm = new LastFMScrobblerClient(
  env.LASTFM_API_KEY,
  env.LASTFM_USERNAME,
);

function formatKoitoTrack(track: KoitoScrobble): LocalLastFMData {
  return {
    latestTrack: undefined, // not compatible with lastfm
    artist: track.track.artists?.map((a) => a.name).join(", "),
    album: undefined, // koito doesn't provide album name
    track: track.track.title,
    image: track.track.image
      ? `https://music.derock.dev/images/medium/${track.track.image}`
      : undefined,
    url: `https://music.derock.dev/track/${track.track.id}`,
  };
}

/**
 * Fetches the current track from Koito, falling back to Last.fm
 */
export async function fetchCurrentTrack() {
  const koitoTrack = await koito.fetchCurrentTrack();
  let data: LocalLastFMData | null = null;

  if (koitoTrack) {
    if (!koitoTrack.currently_playing)
      return null;

    data = formatKoitoTrack(koitoTrack);
  } else {
    data = await lastfm.fetchCurrentTrack();
  }

  return data;
}

export async function GET() {
  try {
    return new Response(JSON.stringify(await fetchCurrentTrack() ), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=10, must-revalidate",
        "CDN-Cache-Control": "max-age=10, must-revalidate",
        "Vercel-CDN-Cache-Control": "max-age=10, must-revalidate",
      },
    });
  } catch (err) {
    console.log("Unexpected error occured when trying to fetch song,", err);
    return new Response("", { status: 500 });
  }
}
