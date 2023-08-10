import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { makeStore } from "@/store";
import { wrapper } from "@/store";

export default function App({ Component, pageProps, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
