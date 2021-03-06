import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lodestone's Map!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <iframe
          src="http://map.lodestone.quest:8132/"
          width="100%"
          height="100%"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </main>

      <Footer />
    </div>
  );
}
