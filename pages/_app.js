
import '../styles/globals.css'
import Script from 'next/script'
import { PlasmicRootProvider } from "@plasmicapp/react-web";

function MyApp({ Component, pageProps }) {
  return (<>
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  </>);
}

export default MyApp
