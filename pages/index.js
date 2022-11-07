import Head from "next/head";
import Header from "../components/Header";
import ProductsBtn from "../components/ProductsBtn";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GyMoClock</title>
      </Head>
      <>
        <Header />
        <ProductsBtn />
      </>
    </div>
  );
}
