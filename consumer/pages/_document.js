import Document, { Html, Head, Main, NextScript } from "next/document";
import { patchSharing } from "@module-federation/nextjs-mf";

class MyDocument extends Document {
  static async getServerSideProps(ctx) {
    const initialProps = await Document.getServerSideProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        {patchSharing()}
        <script src="http://localhost:3000/_next/static/remoteEntryMerged.js" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;