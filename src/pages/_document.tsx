import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almendra:ital,wght@0,400;0,700;1,400;1,700&family=Astloch:wght@400;700&family=Eagle+Lake&family=Eczar&family=Federant&family=Fondamento:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon"
        href="/images/d20.png"
        type="image/png"
        />
      </Head>
      <body data-theme="retro">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
