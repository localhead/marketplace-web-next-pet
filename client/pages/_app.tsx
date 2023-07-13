import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";

import { AdaptiveContext } from "@features/adaptive/components/AdaptiveContext";
import { storeWrapper } from "@features/store/store";
import { GlobalStyle, onestFont } from "@utils/globalStyle";
import { NextAdapter } from "next-query-params";
import { QueryParamProvider } from "use-query-params";

// If loading a variable font, you don't need to specify the font weight

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = storeWrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <QueryParamProvider adapter={NextAdapter}>
        <NextNProgress />
        <AdaptiveContext>
          <GlobalStyle />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
            <meta charSet="UTF-8" />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff"></meta>
            <link
              rel="icon"
              type="image/svg"
              sizes="32x32"
              href="/vector/logo.svg"
            />
            <title>Portal Store</title>
          </Head>

          <main className={onestFont.className}>
            <Component {...props.pageProps} />
          </main>
        </AdaptiveContext>
      </QueryParamProvider>
    </Provider>
  );
}
