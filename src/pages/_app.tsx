import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "../store/index";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
