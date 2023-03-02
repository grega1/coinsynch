import CtaSection from "components/CtaSection";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import NewsLetter from "components/NewsLetter";
import SoluctionSection from "components/SoluctionSection";
import TopCryptos from "components/TopCryptos";
import Head from "next/head";



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <Navbar />
    <CtaSection />
    <SoluctionSection />
    <TopCryptos />
    <NewsLetter />
    <Footer />

    </>
  );
}

export default Home;
