/**
 * Track returned by Koito
 */
export type KoitoScrobble = {
  currently_playing: boolean;
  track: {
    id: number;
    title: string;
    artists: {
      id: number;
      name: string;
    }[];
    musicbrainz_id: string | null;
    listen_count: number;
    duration: number; // in seconds
    image?: string; // image id
    album_id: number;
    time_listened: number; // in seconds
    first_listen: number; // unix timestamp
  };
};

/**
 * Read data from Koito instance
 */
export class KoitoScrobblerClient {
  constructor(
    public readonly baseURL: string,
    public readonly headers?: Record<string, string>,
  ) {}

  public async fetchCurrentTrack(): Promise<KoitoScrobble | null> {
    const response = await fetch(`${this.baseURL}/apis/web/v1/now-playing`, {
      headers: this.headers,
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch current track from Koito: ${response.status} ${response.statusText}`,
      );
      return null;
    }

    const data = (await response.json()) as KoitoScrobble;
    return data;
  }
}
