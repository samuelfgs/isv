
import '../styles/globals.css'
import Script from 'next/script'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import PlasmicGlobalContextsProvider from "../components/plasmic/isv/PlasmicGlobalContextsProvider";
function MyApp({ Component, pageProps }) {
  return (<>
    <PlasmicRootProvider>
      <PlasmicGlobalContextsProvider>
        <Component {...pageProps} />
      </PlasmicGlobalContextsProvider>
    </PlasmicRootProvider>
  </>);
}

export default MyApp
