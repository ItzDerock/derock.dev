import { createSignal, onCleanup } from "solid-js";
import styles from "./loading.module.css";

export default function SnakeLoading() {
  const [dots, setDots] = createSignal(0);

  const interval = setInterval(() => {
    setDots((dots() + 1) % 4);
  }, 500);

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <div class="m-auto border-black snake-box-gradient shadow-snakeWindow backdrop-blur-[32px] p-4 rounded-lg w-fit flex flex-col sm:flex-row mx-auto">
      <div class="flex absolute top-0 left-0 h-full w-full">
        <div class="w-full h-fit bg-background bg-opacity-[90%] shadow-snakeGameWindow my-auto py-2 text-center text-white">
          Loading{
            new Array(dots()).fill('.').join('')
          }
        </div>
      </div>
      <div class="bg-background bg-opacity-[84%] shadow-snakeGameWindow rounded-lg snake-loading p-8 min-h-fit min-w-fit">
        <div class={styles["snake-loading"] + " h-fit"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-8 -8 64 84"
            shape-rendering="crispEdges"
            class="w-full h-full"
          >
            <defs>
              <pattern
                id="pattern"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
                x="-4"
                y="-4"
              >
                <path d="M 0 0 L8 0 8 8 0 8 z" fill="none"></path>
              </pattern>
            </defs>

            <g
              class={styles["snake-group"]}
              stroke-linejoin="miter"
              stroke-linecap="square"
              stroke-width="8"
              fill="none"
            >
              <path class={styles["dot"] + " " + styles["dot-1"]} d="M28,48 l8,0z" />
              <path class={styles["dot"] + " " + styles["dot-2"]} d="M-4,48 l8,0z" />
              <path class={styles["dot"] + " " + styles["dot-3"]} d="M4,16 l8,0z" />

              <path
                class={styles["snake"]}
                d="M0 16 h48 v16 H32 v32 H0 V48 h16 V0 H0 v16"
              />
            </g>

            <rect
              x="-4.5"
              y="-4.5"
              fill="url(#pattern)"
            ></rect>
          </svg>
        </div>
      </div>
    </div>
  );
}
