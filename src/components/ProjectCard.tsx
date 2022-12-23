import type { IconTypes } from "solid-icons";
import { IoCodeDownload, IoStar } from "solid-icons/io";
import { For, JSX, Show } from "solid-js";
import GithubStars from "./Stats/Github";
import NPMStats from "./Stats/NPM";

// import { importIoSolidIcons } from "~/utils/icons";
// const IoCodeDownload = importIoSolidIcons("IoCodeDownload");
// const IoStar = importIoSolidIcons("IoStar");

type CardProps = {
  title: string;
  children: JSX.Element;
  image: string;

  // Optional props
  index?: number;
  links?: {
    content: string | Element;
    link: string;
  }[]
  badge?: {
    color: string;
    icon: IconTypes;
    fill?: string;
    href?: string;
  }

  github?: string; // pull gh stats
  npmjs?: string; // pull npm stats
}

export default function ProjectCard(props: CardProps) {
  return (
    <div class="h-full min-h-fit w-fit">
      <h2 class="text-primary-400 font-bold">
        Project 
        <Show when={typeof props.index !== "undefined"}>
          {props.index}
        </Show>

        <span class="text-secondary-100">
          // {props.title}
        </span>
      </h2>

      <div class="relative flex flex-col rounded-lg bg-primary-300 border-line border max-w-sm h-full">
        {
          props.badge && (
            <a
              class="absolute rounded-md m-2 p-2 top-0 right-0 shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              href={props.badge!.href ?? "#"}
              style={{ "background-color": props.badge!.color }}
              target="_blank"
              rel="noreferrer"
              aria-label={`Top tool used in ${props.title}`}
            >
              <props.badge.icon class="w-6 h-6" style={{
                "fill": props.badge!.fill ?? "white"
              }}/>
            </a>
          )
        }
        <img src={props.image} alt={props.title} class="rounded-t-lg" loading="lazy" />
        
        <div class="p-4 border-t border-t-line flex flex-col flex-grow gap-4">
          <Show when={props.npmjs || props.github}>
            <div class="flex flex-row flex-wrap gap-3">
              <Show when={props.npmjs}>
                <div class="text-accent-200 bg-secondary-400 py-2 px-4 rounded text-sm whitespace-nowrap min-w-fit flex-grow text-center">
                  <IoCodeDownload class="inline-block" size={"1rem"} />{" "}
                  <p class="inline-block text-xs">
                    <NPMStats pkg={props.npmjs!} /> dl/week
                  </p>
                  {" "}
                </div>  
              </Show>

              <Show when={props.github}>
                <div class="text-accent-200 bg-secondary-400 py-2 px-4 rounded text-sm whitespace-nowrap min-w-fit flex-grow text-center">
                  <IoStar class="inline-block" size={"1rem"} />{" "}
                  <p class="inline-block text-xs">
                    <GithubStars repo={props.github!} /> stars
                  </p>
                  {" "}
                </div>  
              </Show>
              
            </div>
          </Show>

          <div class="text-secondary-100 [&>em]:text-primary-400 [&>em]:not-italic [&>pre]:bg-background [&>pre]:inline-block [&>pre]:px-2 [&>pre]:rounded-md" children={props.children} />

          <Show when={props.links && props.links.length > 0}>
            <div class="flex flex-row gap-3 mb-0 mt-auto">
              <For each={props.links ?? []}>
                {(data) => (
                    <a
                      href={data.link}
                      class="text-accent-200 bg-secondary-400 py-2 px-4 rounded hover:bg-slate-600 hover:shadow-md hover:-translate-y-1 transition-all duration-500"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.content}
                    </a>
                )}
              </For>
            </div>
          </Show>
        </div>
      </div>
    </div>
  )
}