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

export type LocalLastFMData = {
  latestTrack: Track | undefined;
  artist: string | undefined;
  album: string | undefined;
  track: string | undefined;
  image: string | undefined;
  url: string | undefined;
};

/**
 * Read data from Last.fm API
 */
export class LastFMScrobblerClient {
  constructor(
    public readonly apiKey: string,
    public readonly user: string,
  ) {}

  public async fetchCurrentTrack(): Promise<LocalLastFMData | null> {
    const queryParams = new URLSearchParams();
    queryParams.append("method", "user.getrecenttracks");
    queryParams.append("user", this.user);
    queryParams.append("api_key", this.apiKey);
    queryParams.append("format", "json");

    const fetchStart = Date.now();
    const data = await fetch(
      `https://ws.audioscrobbler.com/2.0/?${queryParams.toString()}`,
    ).then((res) => res.json() as Promise<LastFMResponse>);

    const latestTrack = data.recenttracks.track.find(
      (t) => t["@attr"]?.nowplaying === "true",
    );

    if (!latestTrack) {
      return null;
    }

    const artist = latestTrack?.artist["#text"];
    const album = latestTrack?.album["#text"];
    const track = latestTrack?.name;
    const image = latestTrack?.image.find((i) => i.size === "medium")?.[
      "#text"
    ];
    const url = latestTrack?.url?.replace(
      "https://www.last.fm/music/",
      `https://www.last.fm/user/${encodeURIComponent(this.user)}/library/music/`,
    );

    console.log(
      `[${Date.now() - fetchStart}ms] Fetched ${this.user}'s latest song: ${track} by ${artist}`,
    );

    return { latestTrack, artist, album, track, image, url };
  }
}
