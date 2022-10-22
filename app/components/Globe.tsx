import {
  lazy,
  Suspense,
  useCallback,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
const ReactGlobe = lazy(() => import("react-globe.gl"));
import { GlobeMethods } from "react-globe.gl";
// import ReactGlobe, { GlobeMethods } from "react-globe.gl";
import { useRef } from "react";
import { isMobile } from "react-device-detect";
import { globeImg, turnGlobe } from "~/util/globe";
import { useEffect } from "react";

export default function () {
  const globeRef = useRef<GlobeMethods>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);
  const size = isMobile ? 320 : 600; // px on one side
  const nightMode = false;

  function initGlobe() {
    if (globeRef.current) {
      console.log("Running effect");
      const controls: any = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1;
      globeRef.current.pointOfView({ lat: 0, lng: 0, altitude: 1.5 });
      // @ts-ignore TS can't see classname because of suspense, I think
      globeRef.current.className =
        "select-none decoration-transparent cursor-grab";
    }
  }

  // Called when the globe position changes
  function globeOnZoom() {
    const ZOOM_SPEED = 1;
    const controls: any = globeRef.current?.controls();
    if (controls != null) controls.zoomSpeed = ZOOM_SPEED;
  }

  const containerClip = {
    width: `${size}px`,
    clipPath: `circle(${size / 2}px at ${size / 2}px ${size / 2}px)`,
  };

  return (
    <div
      ref={containerRef}
      className="globe mx-auto cursor-grab text-center select-none"
      style={containerClip}
    >
      <Suspense fallback={<p>Loading...</p>} key={1}>
        <div className="hidden" />
        {/* <div className="hidden" ref={measuredRef} /> */}
        <ReactGlobe
          // style={{ "-webkit-tap-highlight-color": "transparent" }}

          ref={globeRef}
          globeImageUrl={globeImg(nightMode)}
          width={size}
          height={size}
          backgroundColor="#00000000"
          // polygonsData={places}
          // // @ts-ignore
          // polygonCapColor={polygonColour}
          // // @ts-ignore
          // polygonLabel={getLabel}
          // // @ts-ignore
          // polygonAltitude={getAltitude}
          // polygonSideColor="blue"
          onGlobeClick={(d) => turnGlobe(d, globeRef)}
          onGlobeReady={initGlobe}
          // onPolygonClick={(p, e, c) => turnGlobe(c, globeRef)}
          // polygonStrokeColor="#00000000"
          atmosphereColor={nightMode ? "rgba(63, 201, 255)" : "lightskyblue"}
          onZoom={globeOnZoom}
        />
      </Suspense>
    </div>
  );
}
