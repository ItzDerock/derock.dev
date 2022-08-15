import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import { dom } from "@fortawesome/fontawesome-svg-core";

const queryClient = new QueryClient();

const App: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <style>
          {dom.css()}
        </style>
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;