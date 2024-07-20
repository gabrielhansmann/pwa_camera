import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000" />
          <link rel="apple-touch-icon" href="/icons/android-chrome-192x192.png" />
          <link rel="icon" href="/icons/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" href="/icons/android-chrome-512x512.png" sizes="512x512" />
          <meta name="description" content="An example PWA Camera App" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
