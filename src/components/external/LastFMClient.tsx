import { createMemo, createResource, onMount, Show } from "solid-js";
import type { LocalLastFMData } from "../../pages/api/lastfm";
import styles from "./lastfm.module.css";
import defaultDisc from "../../assets/lastfm/default-disc.webp";

export function LastFMClient({
  initialValue,
}: {
  initialValue?: LocalLastFMData | null;
}) {
  const [data, { refetch }] = createResource(
    () => true,
    () =>
      // can't fetch on the server, so defer to client-side
      // Astro global not available in solid, so cant use Astro.url
      globalThis.window
        ? fetch("/api/lastfm").then((r) => r.json() as Promise<LocalLastFMData>)
        : Promise.resolve(null),
    {
      initialValue,
    },
  );

  // refetch every 30 seconds
  onMount(() => {
    const interval = setInterval(() => {
      refetch();
    }, 30000);

    if (globalThis.window) refetch();

    return () => clearInterval(interval);
  });

  const desc = createMemo(() => {
    const track = data()?.track;
    const album = data()?.album;

    // for singles, just show the track name once
    let raw =
      (track?.trim() === album?.trim() || !album
        ? track?.trim()
        : `${track} • ${album}`) ?? "";

    // limit the description to 100 characters
    if (raw.length > 100) raw = raw.slice(0, 100) + "...";
    return raw;
  });

  return (
    <Show when={data()?.latestTrack}>
      <div class={`space-y-2 ${styles.fadeUpStatic}`}>
        <h2 class="font-semibold">Currently Listening</h2>
        <a
          class="flex flex-row items-center gap-2"
          href={data()?.url}
          target="_blank"
        >
          <span class="relative animate-spin-slow">
            <img
              src={data()?.image || defaultDisc.src}
              alt="Last.fm album cover"
              class="rounded-full"
              width={48}
              height={48}
            />
          </span>

          <span class="flex flex-col grow">
            <span class="font-bold">{data()?.artist}</span>
            <span>{desc()}</span>
          </span>
        </a>
      </div>
    </Show>
  );
}
