import { Accessor, Match, Show, Switch } from "solid-js";
import type { Direction, XY } from "./types";
import StartGame from "./assets/StartGame.svg";
import { RESOLUTION } from "./constants";

export default function SnakeDisplay({
  snake,
  food,
  direction,
  gameStarted,
  startGame,
}: {
  snake: Accessor<XY[]>;
  food: Accessor<XY>;
  direction: Accessor<Direction>;
  gameStarted: Accessor<boolean>;
  startGame: () => void;
}) {
  return (
    <div class="w-[240px] h-[400px] bg-background bg-opacity-[84%] shadow-snakeGameWindow rounded-lg">
      <Show
        when={gameStarted()}
        fallback={
          <div class="flex flex-col items-center justify-center h-full">
            <img src={StartGame} draggable={false} alt="Snake game demo" />
            <button
              class="bg-accent-100 rounded-xl mt-4 p-2 text-primary-100 hover:bg-accent-200"
              onClick={startGame}
            >
              start-game
            </button>
          </div>
        }
      >
        <div class="absolute">
          {snake().map(([x, y], i, arr) => (
            <div
              class={
                "w-[8px] h-[8px] absolute bg-accent-200" +
                (i === 0
                  ? direction() === "up"
                    ? " rounded-t-full"
                    : direction() === "down"
                    ? " rounded-b-full"
                    : direction() === "left"
                    ? " rounded-l-full"
                    : direction() === "right"
                    ? " rounded-r-full"
                    : ""
                  : "")
              }
              style={{
                left: `${x * RESOLUTION}px`,
                top: `${y * RESOLUTION}px`,
                opacity:
                  i < arr.length - 8 ? 1 : 1 - (i - (arr.length - 8)) / 8,
              }}
            />
          ))}
          {/* food */}
          {
            <div
              class="rounded-full bg-accent-200 absolute animate-ping"
              style={{
                width: `${RESOLUTION}px`,
                height: `${RESOLUTION}px`,
                left: `${food()[0] * RESOLUTION}px`,
                top: `${food()[1] * RESOLUTION}px`,
              }}
            />
          }
          {
            <div
              class="rounded-full bg-accent-200 absolute"
              style={{
                width: `${RESOLUTION}px`,
                height: `${RESOLUTION}px`,
                left: `${food()[0] * RESOLUTION}px`,
                top: `${food()[1] * RESOLUTION}px`,
              }}
            />
          }
        </div>
      </Show>
    </div>
  );
}
