import { browserVersion, isSafari } from "react-device-detect";
import { GlobeMethods } from "react-globe.gl";
// import { Country } from "../lib/country";
import { computeArea, LatLng } from "spherical-geometry-js";

import earthDay from "~/images/earth-day.webp";
import earthNight from "~/images/earth-night.webp";
import earthDaySafari from "~/images/safari-14-earth-day.jpg";
import earthNightSafari from "~/images/safari-14-earth-night.jpg";

export function altitudeFunction(area: number) {
  // This function may seem arbitrary but I made it with a spreadsheet
  // and it made sense there.
  if (area >= 10) {
    return 1.5;
  }
  return 1 / (-2.55 * area + 26);
}

// export function findCentre(country: Country) {
//   const { bbox } = country;
//   const [lng1, lat1, lng2, lat2] = bbox;
//   const latitude = (lat1 + lat2) / 2;
//   const longitude = (lng1 + lng2) / 2;
//   const path = [
//     new LatLng(lat1, lng1),
//     new LatLng(lat1, lng2),
//     new LatLng(lat2, lng2),
//     new LatLng(lat2, lng1),
//   ];
//   const area = computeArea(path);
//   const areaOoM = Math.log10(area);
//   const altitude = altitudeFunction(areaOoM);
//   return { lat: latitude, lng: longitude, altitude };
// }

export function turnGlobe(
  coords: {
    lat: number;
    lng: number;
    altitude?: number;
  },
  globeRef: React.MutableRefObject<GlobeMethods>,
  source?: string
) {
  const controls: any = globeRef.current.controls();
  controls.autoRotate = false;
  const currentAlt = globeRef.current.pointOfView().altitude;
  coords["altitude"] =
    source === "zoom" && "altitude" in coords
      ? coords["altitude"]
      : Math.max(currentAlt, 0.05);
  globeRef.current.pointOfView(coords, 250);
}

export const globeImg = (nightMode: boolean) => {
  const time = nightMode ? "night" : "day";
  if (isSafari && browserVersion < "14") {
    if (nightMode) {
      return earthNightSafari;
    } else {
      return earthDaySafari;
    }
  } else {
    if (nightMode) {
      return earthNight;
    } else {
      return earthDay;
    }
  }
};
