import type { IconTypes } from "solid-icons";
import { For, Show } from "solid-js";

type JobExpEntry = {
  type?: 'first' | 'last' | 'middle';

  techUsed?: ({
    name: string,
    icon?: IconTypes,
    href?: string
  })[];
  position?: string;
  company: string;
  href?: string;
  date?: string;
  description: string;
}

export default function JobExpEntry(props: JobExpEntry) {

  return (
    <>
      {/*  1/3 = the dot and line for timeline */}
      <div class="flex flex-col items-center space-y-2">
        <div class={
          "w-1 flex-grow" + (
            props.type !== "first" ? " bg-accent-200" : ""
          )
        } />
        <div class="w-2 h-2 relative">
          {/* pulsing dot if first */}
          <div class="w-2 h-2 bg-accent-200 rounded-full" />

          <Show when={props.type === "first"}>
            <div class="absolute top-0 left-0 w-2 h-2 bg-accent-200 rounded-full animate-ping" />
          </Show>
        </div>
        
        <div class={
          "w-1 flex-grow" + (
            props.type !== "last" ? " bg-accent-200" : ""
          )
        } />
      </div>

      {/*  2/3 = the content */}
      <div class="col-span-3 m-3">
        <div class="flex flex-col space-y-4">
          <div class="flex flex-col space-y-2">
            <h3 class="text-white text-xl">
              {props.href ? (
                <a href={props.href} class="underline decoration-dotted underline-offset-4">{props.company}</a>
              ) : (
                props.company
              )}
            </h3>
            <Show when={props.position || props.date}>
              <p>
                <Show when={props.position}>
                  <span class="text-accent-200">
                    {props.position}
                  </span>
                </Show>

                <Show when={props.position && props.date}>
                  <span class="text-line">
                    {" // "}
                  </span>
                </Show>

                <Show when={props.date}>
                  <span class="text-secondary-200">
                    {props.date}
                  </span>
                </Show>
              </p>
            </Show>
            <p class="text-secondary-100">
              {props.description}
            </p>
            <Show when={props.techUsed && props.techUsed.length > 0}>
              <div class="flex flex-row flex-wrap gap-2">
                <For each={props.techUsed ?? []}>
                  {tech => (
                    <div class="flex flex-row items-center space-x-2 bg-secondary-400 text-accent-200 p-2 rounded-md text-xs hover:-translate-y-1 duration-500 hover:bg-slate-600 transition-all">
                      { tech.icon && <tech.icon /> }
                      {
                        tech.href ? (
                          <a href={tech.href}>{tech.name}</a>
                        ) : (
                          <p>{tech.name}</p>
                        )
                      }
                    </div>
                  )}
                </For>
              </div>
            </Show>
          </div>
        </div>
      </div>
    </>
  )
}