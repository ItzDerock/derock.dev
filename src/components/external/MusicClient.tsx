import { createMemo, createResource, onMount, Show } from "solid-js";
import styles from "./music.module.css";
import defaultDisc from "../../assets/lastfm/default-disc.webp";
import type { LocalLastFMData } from "~/external/scrobblers/LastFM";

export function LastFMClient({
  initialValue,
}: {
  initialValue?: LocalLastFMData | null;
}) {
  const [data, { refetch }] = createResource(
    () =>
      // can't fetch on the server, so defer to client-side
      // Astro global not available in solid, so cant use Astro.url
      globalThis.window
        ? fetch("/api/music").then((r) => r.json() as Promise<LocalLastFMData>)
        : Promise.resolve(initialValue),
    {
      initialValue,
    },
  );

  // refetch every 30 seconds
  onMount(() => {
    const interval = window.setInterval(() => {
      refetch();
    }, 30000);

    if (globalThis.window) refetch();

    return () => clearInterval(interval);
  });

  const desc = createMemo(() => {
    const track = data.latest?.track;
    const album = data.latest?.album;

    // for singles, just show the track name once
    return (
      (track?.trim() === album?.trim() || !album
        ? track?.trim()
        : `${track} • ${album}`) ?? ""
    );
  });

  return (
    <Show when={data.latest}>
      <div class={`space-y-2 ${styles.fadeUpStatic}`}>
        <h2 class="font-semibold">Currently Listening</h2>
        <a
          class="flex flex-row items-center gap-2"
          href={data.latest?.url}
          target="_blank"
        >
          <div class="relative animate-spin-slow shrink-0">
            <img
              src={data.latest?.image || defaultDisc.src}
              alt="Last.fm album cover"
              class="rounded-full"
              width={48}
              height={48}
            />
          </div>

          <div class="flex flex-col grow">
            <h2 class="font-bold">{data.latest?.artist}</h2>
            <p class="max-h-12 line-clamp-2">{desc()}</p>
          </div>
        </a>
      </div>
    </Show>
  );
}
