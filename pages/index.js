import { getProductInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Cakeiva</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="Modern eCommerce website to browse through different products using Next.js, Shopify, TailwindCSS, and GraphQL"
        />
        <meta property="og:title" content="Cakeiva" />
        <meta property="og:type" content="website" />
        {/* 
        ----Link for website-----
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        ----Image for website for sharing-----
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        /> */}
        <meta
          property="og:description"
          content="Modern eCommerce website to browse through different products using Next.js, Shopify, TailwindCSS, and GraphQL"
        />
        <meta property="og:locale" content="en_US" />
        {/* <meta property="og:site_name" content="IMDb" /> */}
      </Head>

      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductInCollection();
  return {
    props: { products }, // will be passed to the page component as props
  };
}
