
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost } from '@plasmicapp/react-web/lib/host';
import { registerAll } from "../components/contentful";

registerAll();

export default function PlasmicHost() {
  return (
    <div>
      <Script
        src="https://static1.plasmic.app/preamble.js"
        strategy="beforeInteractive"
      />
      <PlasmicCanvasHost />
    </div>
  );
}
    