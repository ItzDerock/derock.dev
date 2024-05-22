import { clientOnly } from "@solidjs/start";
import { ErrorBoundary, lazy, Suspense } from "solid-js";
import SnakeLoading from "~/components/SnakeLoading";
import Contact from "~/partials/Home/Contact";
import JobExperience from "~/partials/Home/JobExperience";
import Publications from "~/partials/Home/Papers";
const SnakeGame = lazy(() => import("~/components/Snake"));
const HomeLanguageSlider = clientOnly(
  () => import("~/partials/Home/LanguageSlider"),
);

import RecentProjects from "~/partials/Projects/RecentProjects";

export default function Home() {
  return (
    <main class="max-h-full w-full overflow-y-auto flex flex-col space-y-4">
      <section class="h-fit w-fit mx-auto flex-grow p-8 xl:p-4 grid grid-cols-1 xl:grid-cols-2 2xl:gap-16 min-h-fit xl:min-h-full">
        <div class="text-left my-auto mt-8 xl:mt-auto xl:mx-auto xl:mr-0 xl:ml-16 2xl:ml-auto space-y-2">
          <small class="text-lg text-white">
            Hey there!{" "}
            <span class="animate-hand-wave inline-block origin-hand-wave">
              👋
            </span>
          </small>
          <h1 class="text-5xl text-white">I'm Derock.</h1>
          <h2 class="text-secondary-300 text-2xl">
            {">"} Full stack developer
          </h2>
          <p class="text-accent-200 [&>a]:underline">
            <a href="/discord">Discord</a>{" "}
            <a href="mailto:derock@derock.dev">Email</a>{" "}
            <a href="https://github.com/ItzDerock">Github</a>{" "}
            <a href="https://derock.blog/?ref=portfolio">Blog</a>
          </p>

          <br />

          <code class="text-secondary-200 whitespace-pre-wrap">
            // Hi there! <br />
            // I'm a high school student that does a lot of coding in my free
            time. <br />
            // I am a big fan of open source and I love to contribute to
            projects. <br />
            // Interested in working with me? <br />
            // Reach out to me using the links above!
          </code>
        </div>

        <div class="text-left w-full my-auto space-y-2 mt-14 xl:mt-auto h-fit">
          <Suspense fallback={<SnakeLoading />}>
            <ErrorBoundary
              fallback={(err) => (
                <div class="text-center text-white">
                  <h1>Error loading Snake Game</h1>
                  <p>{err.message}</p>
                </div>
              )}
            >
              <SnakeGame />
            </ErrorBoundary>
          </Suspense>
        </div>
      </section>

      <HomeLanguageSlider />
      <div class="max-w-[1800px] mx-auto px-8 space-y-12">
        <RecentProjects />
        <JobExperience />
        <Contact />
      </div>

      <section>
        {/* filler */}
        <br />
      </section>
    </main>
  );
}
