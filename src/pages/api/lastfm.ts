import request from "@11ty/eleventy-fetch";
import * as env from "astro:env/server";

// Last.fm API types --------------
type LastFMResponse = {
  recenttracks: {
    track: Track[];
    "@attr": Attr2;
  };
};

type Track = {
  artist: {
    mbid: string;
    "#text": string;
  };
  streamable: string;
  image: Image[];
  mbid: string;
  album: Album;
  name: string;
  "@attr"?: Attr;
  url: string;
  date?: Date;
};

interface Image {
  size: string;
  "#text": string;
}

interface Album {
  mbid: string;
  "#text": string;
}

interface Attr {
  nowplaying: "true" | "false";
}

interface Date {
  uts: string;
  "#text": string;
}

interface Attr2 {
  user: string;
  totalPages: string;
  page: string;
  perPage: string;
  total: string;
}

// End Last.fm API types --------------
export async function fetchCurrentSong(user: string = env.LASTFM_USERNAME) {
  const queryParams = new URLSearchParams();
  queryParams.append("method", "user.getrecenttracks");
  queryParams.append("user", user);
  queryParams.append("api_key", env.LASTFM_API_KEY);
  queryParams.append("format", "json");

  const data = await request<LastFMResponse>(
    `https://ws.audioscrobbler.com/2.0/?${queryParams.toString()}`,
    {
      type: "json",
      duration: "15s",
    }
  );

  const latestTrack = data.recenttracks.track.find(
    (t) => t["@attr"]?.nowplaying === "true"
  );

  const artist = latestTrack?.artist["#text"];
  const album = latestTrack?.album["#text"];
  const track = latestTrack?.name;
  const image = latestTrack?.image.find((i) => i.size === "medium")?.["#text"];
  const url = latestTrack?.url?.replace(
    "https://www.last.fm/music/",
    `https://www.last.fm/user/${encodeURIComponent(user)}/library/music/`
  );

  return { latestTrack, artist, album, track, image, url };
}

export type LocalLastFMData = Awaited<ReturnType<typeof fetchCurrentSong>>;

export async function GET() {
  const data = await fetchCurrentSong();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}