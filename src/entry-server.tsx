// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <title>derock.dev - Fullstack Developer</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#5f8785" />

          {/* thumbnail (large) */}
          <meta
            property="og:image"
            content="https://derock.media/r/C0sTOP.png"
          />
          <meta name="twitter:card" content="summary_large_image" />

          {/* title */}
          <meta
            property="og:title"
            content="derock.dev - Fullstack Developer"
          />

          {/* description */}
          <meta
            name="description"
            content="Hi I'm Derock, a high school student and fullstack developer."
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin={"anonymous"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
          />

          {assets}
        </head>
        <body class="bg-background lg:p-14 font-fira max-h-screen max-w-full overflow-x-hidden flex">
          <div
            class="bg-primary-200 lg:rounded-xl lg:border border-line flex-grow flex flex-col mx-auto max-h-full overflow-y-auto"
            id="app"
          >
            {children}
          </div>

          {scripts}
          <script
            defer={true}
            data-domain="derock.dev"
            src="https://stats.derock.dev/js/script.outbound-links.js"
          ></script>
        </body>
      </html>
    )}
  />
));
