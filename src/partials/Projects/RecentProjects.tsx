import { FaBrandsGithub, FaSolidArrowRight } from "solid-icons/fa";
import { IoLogoStencil } from "solid-icons/io";
import { SiSolid, SiReact, SiTypescript, SiJavascript } from "solid-icons/si";

import { Show } from "solid-js";
import { A } from "solid-start";
import ProjectCard from "~/components/ProjectCard";

type RecentProjectsProps = {
  type?: "featured" | "all";
}

export default function RecentProjects(props: RecentProjectsProps) {
  if(!props.type) props.type = "featured";

  return (
    <section class="m-4 xl:m-24">
      <h2 class="text-white text-2xl mt-4 text-center">
        {">"} {
          props.type === "featured"
            ? "Featured"
            : "All"
        } projects <span class="animate-shake inline-block">🚀</span>
      </h2>

      <div class="justify-center flex flex-row flex-wrap w-full gap-6 mt-4 items-stretch">
        <ProjectCard
          title="discord-html-transcripts"
          image="https://derock.media/r/7K4z7w.png"
          links={[
            {
              content: "Github",
              link: "https://github.com/ItzDerock/discord-html-transcripts",
            },
            {
              content: "NPM",
              link: "https://npmjs.com/package/discord-html-transcripts",
            },
          ]}
          badge={{
            color: "#4c48ff",
            icon: IoLogoStencil,
            href: "https://stenciljs.com/",
          }}

          npmjs="discord-html-transcripts"
          github="ItzDerock/discord-html-transcripts"
        >
          <pre>discord-html-transcripts</pre> is an open-source package for developers looking to create 
          Discord-style chat transcripts. It is built using <em>StencilJS</em> and <em>React SSR</em>.
        </ProjectCard>

        <ProjectCard
          title="poroscout.gg"
          image="https://derock.media/r/g36kwr.png"
          links={[
            {
              content: "Github",
              link: "https://github.com/Poroscout",
            },
            {
              content: "Website",
              link: "https://poroscout.gg",
            },
          ]}
          badge={{
            color: "#00ccff",
            icon: SiReact,
            href: "https://reactjs.org",
          }}

          github="Poroscout/website"
        >
          Poroscout is a Discord Bot currently serving over 150k users across 2,000+ servers. 
          The website is built using <em>NextJS</em>, <em>TailwindCSS</em>, and the bot is running in <em>Node.js (TS)</em> with a <em>PostgreSQL</em> database.
        </ProjectCard>

        <ProjectCard
          title="mcstorage.cloud"
          image="https://media.derock.dev/r/1QBaTl.png"
          badge={{
            color: "#00ccff",
            icon: SiReact,
            href: "https://reactjs.org",
          }}
          links={[
            {
              content: "Website",
              link: "https://mcstorage.cloud",
            }
          ]}
        >
          MCStorage was a BaaS (Backup as a Service) I created with a friend.
          It's goal was to integrate easily into Minecraft and other game servers to easily backup data.
          It was sold off in 2022 and is now under new management.
          The frontend was in <em>Reactjs</em>, while the backend consisted of a <em>Fastify</em> server, <em>ZFS</em> storage nodes, and more.
        </ProjectCard>

        <ProjectCard
          title="derock.dev"
          image="https://derock.media/r/C0sTOP.png"
          links={[
            {
              content: "Github",
              link: "https://github.com/ItzDerock/derock.dev",
            },
          ]}
          badge={{
            color: "#4e88c6",
            icon: SiSolid,
            href: "https://solidjs.com",
          }}

          github="ItzDerock/derock.dev"
        >
          This repository holds the site you are seeing right now!
          It was built with <em>SolidJS</em>, <em>Solid-Start</em>, and <em>TailwindCSS</em>.
          You can also view older versions of the site on the different branches.
          An older version of this site made in <em>Next.JS</em> and <em>React</em> can be found on the v1 branch.
        </ProjectCard>

        {/* other projects */}
        <Show when={props.type === "all"}>
          <ProjectCard
            title="discord-markdown-parser"
            image="https://derock.media/r/Y3IyRG.png"
            links={[
              {
                content: "Github",
                link: "https://github.com/ItzDerock/discord-markdown-parser",
              },
              {
                content: "NPM",
                link: "https://npmjs.com/package/discord-markdown-parser",
              }
            ]}

            badge={{
              color: "#2e79c7",
              icon: SiTypescript,
              href: "https://typescriptlang.org",
            }}

            npmjs="discord-markdown-parser"
            github="ItzDerock/discord-markdown-parser"
          >
            This open-source module is a <em>Typescript</em> module that parses Discord Markdown into an <em>Abstract Syntax Tree</em>.
            Discord's markdown system is a complex derivative of <em>CommonMark</em> and <em>GitHub Flavored Markdown</em>.
            This parser is designed to be a way for other developers to easily parse Discord Markdown into a format that can be used in their own projects.
          </ProjectCard>

          <ProjectCard
            title="advanced-stats"
            image="https://derock.media/r/8z57yv.png"
            links={[
              {
                content: "Github",
                link: "https://github.com/ItzDerock/AdvancedStats",
              },
            ]}

            badge={{
              color: '#efdb50',
              icon: SiJavascript,
              href: "https://javascript.com",
            }}
          >
            Advanced Stats is a Discord bot that tracked server statistics and stored them in <em>InfluxDB</em> for later analysis.
            Users could view graphs and other charts related to their server, including voice channel usage, message counts, and more.
            The bot was built using <em>Node.js</em> and <em>Discord.js</em>.
          </ProjectCard>
        </Show>

        {/* view more button */}
        <Show when={props.type === "featured"}>
          <div class="text-center flex align-middle w-[24rem]">
            <A href="projects" class="flex-grow my-auto align-middle text-slate-600 hover:text-slate-400">
              <FaSolidArrowRight /> View More
            </A>
          </div>
        </Show>

        {/* github link */}
        <Show when={props.type === "all"}>
          <div class="text-center flex align-middle w-[24rem]">
            <a href="https://github.com/ItzDerock" class="flex-grow my-auto align-middle text-slate-600 hover:text-slate-400">
              <FaBrandsGithub class="inline-block" /> View other, smaller, projects on Github
            </a>
          </div>
        </Show>
      </div>
    </section>
  )
}