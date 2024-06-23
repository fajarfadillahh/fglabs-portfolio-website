import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          href="/assets/icon-black.svg"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/assets/icon-black.svg" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
