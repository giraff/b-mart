import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:description" content="B-Mart" />
        <meta name="title" content="B-Mart" />
        <meta property="og:image" content="/opengraph.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
