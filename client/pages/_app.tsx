// If loading a variable font, you don't need to specify the font weight

import { AdaptiveContext } from "@features/adaptive/components/AdaptiveContext";
import { storeWrapper } from "@features/store/store";
import { GlobalStyle, onestFont } from "@utils/globalStyle";
import NextAdapter from "next-query-params";
import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { QueryParamProvider } from "use-query-params";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = storeWrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <QueryParamProvider adapter={NextAdapter}>
        <NextNProgress />
        <AdaptiveContext>
          <GlobalStyle />
          <Head>
            <meta charSet="UTF-8" />
            <link rel="icon" type="image/svg" sizes="32x32" href="logo.svg" />
            <title>Market Place</title>
          </Head>
          <main className={onestFont.className}>
            <Component {...props.pageProps} />
          </main>
        </AdaptiveContext>
      </QueryParamProvider>
    </Provider>
  );
}
