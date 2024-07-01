import Layout from "@/Components/Layout";
import Modal from "@/Components/modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Modal actionLabel="Submit" isOpen title="Test Modal"/> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
