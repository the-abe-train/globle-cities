import { lazy, Suspense } from "react";

const ReactGlobe = lazy(() => import("react-globe.gl"));

import { useRef } from "react";
import { GlobeMethods } from "react-globe.gl";
// import Globe from "react-globe.gl";
import { globeImg } from "~/util/globe";

import dayGlobe from "~/images/earth-day.webp";

export default function () {
  const globeRef = useRef<GlobeMethods>(null!);
  const nightMode = false;
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <ReactGlobe
          ref={globeRef}
          globeImageUrl={dayGlobe}
          width={150}
          height={150}
          backgroundColor="#00000000"
          // onGlobeClick={goToGame}
        />
      </Suspense>
      <p>Click on the Globe to play!</p>
    </div>
  );
}
