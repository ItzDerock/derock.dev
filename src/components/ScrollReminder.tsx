import { createSignal, onCleanup, onMount, Show } from "solid-js";

export default function ScrollReminder() {
  // if user has not scrolled after 5 seconds, fade in a reminder
  const [showReminder, setShowReminder] = createSignal<boolean>(false);

  onMount(() => {
    const mainElement = document.querySelector("main");
    if(!mainElement) return console.warn("main element not found!");

    // if main element is not scrollable, don't show reminder
    if(mainElement.scrollHeight <= mainElement.clientHeight) return;

    let timeout = setTimeout(() => {
      setShowReminder(true);
    }, 5000);

    // scroll handler
    const scrollHandler = () => {
      timeout && clearTimeout(timeout);
      setShowReminder(false);
      mainElement.removeEventListener("scroll", scrollHandler);
    }

    // cancel timeout if user scrolls
    mainElement.addEventListener("scroll", scrollHandler);

    // cancel timeout on unmount
    onCleanup(() => {
      timeout && clearTimeout(timeout);
      mainElement.removeEventListener("scroll", scrollHandler);
    });
  });

  return (
    <Show when={showReminder()}>
      <div class="absolute bottom-24 left-1/2 animate-fadeIn">
        <div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg
            class="w-6 h-6 text-secondary-300"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </Show>
  );
}
