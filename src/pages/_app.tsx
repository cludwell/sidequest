import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { wrapper } from "@/store";
import Footer from "./Footer";
import UserSidebar from "./PersonalizedSidebar";

export default function App({ Component, pageProps, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Header />
        {/* <UserSidebar /> */}
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  );
}
