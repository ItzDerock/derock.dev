import type { AppType } from "next/dist/shared/lib/utils";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { loadProgressBar } from 'axios-progress-bar';
import NProgress from 'nprogress';
import { useRouter } from "next/router";
import { useEffect } from "react";

// css
import 'nprogress/nprogress.css';
import "../styles/globals.css";

// loading bar for axios
const queryClient = new QueryClient();
loadProgressBar();

// the actual app
const App: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  // nprogress page loading
  useEffect(() => {
    const start = () => NProgress.start();
    const end   = () => NProgress.done();

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    }
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <style>
          {dom.css()}
        </style>

        <title>Derock&apos;s Development</title>
        <meta name="theme-color" content="#FF4C29" />
        <link rel="icon" href="/favicon.ico" />
        <script defer={true} data-domain="derock.dev" data-api="https://stats.derock.dev/api/log" src="https://stats.derock.dev/js/stats.outbound.js"></script>
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
