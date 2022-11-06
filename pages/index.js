import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import home from "./home";
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
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </>
    </div>
  );
}
