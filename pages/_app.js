
import '../styles/globals.css'
import Script from 'next/script'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import PlasmicGlobalContextsProvider from "../components/plasmic/isv/PlasmicGlobalContextsProvider";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Igreja em SV</title>
    </Head>
    <PlasmicRootProvider>
      <PlasmicGlobalContextsProvider>
        <Component {...pageProps} />
      </PlasmicGlobalContextsProvider>
    </PlasmicRootProvider>
  </>;
}

export default MyApp
