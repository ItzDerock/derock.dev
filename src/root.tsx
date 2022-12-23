// @refresh reload
import { lazy, Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";

import "./root.css";

import Navbar from "./partials/Navbar";
import SnakeLoading from "~/components/SnakeLoading";
const Particles = lazy(() => import("~/components/Particles"));

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>derock.dev - Fullstack Developer</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#5f8785" />

        {/* thumbnail (large) */}
        <Meta
          property="og:image"
          content="https://derock.media/r/C0sTOP.png"
        />
        <Meta name="twitter:card" content="summary_large_image" />

        {/* title */}
        <Meta property="og:title" content="derock.dev - Fullstack Developer" />

        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin={"anonymous"}
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body class="bg-background lg:p-14 font-fira max-h-screen max-w-full overflow-x-hidden flex">
        <div class="bg-primary-200 lg:rounded-xl lg:border border-line flex-grow flex flex-col max-w-full max-h-full overflow-y-auto">
          <Suspense>
            <Particles />
          </Suspense>

          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
          
          <Suspense fallback={<SnakeLoading />}>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </div>

        <Scripts />
        <script defer={true} data-domain="derock.dev" src="https://stats.derock.dev/js/script.outbound-links.js"></script>
      </Body>
    </Html>
  );
}
