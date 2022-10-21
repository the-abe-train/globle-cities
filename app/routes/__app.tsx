import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";

const daySky = {
  background: `radial-gradient(ellipse at top, rgba(63, 201, 255, 0.7), transparent),
    radial-gradient(ellipse at bottom, rgba(255, 196, 87, 0.7), transparent) no-repeat fixed`,
  margin: 0,
};

const nightSky = {
  background: `radial-gradient(ellipse at top, #160152, black),
  radial-gradient(ellipse at bottom, #7D3074, black) no-repeat fixed`,
  margin: 0,
};

const stars = {
  background:
    "transparent url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat",
  opacity: 0.5,
};

const clouds = {
  backgroundImage:
    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/131045/clouds.png), url(https://assets.codepen.io/557388/clouds.png)",
  backgroundRepeat: "repeat repeat",
  marginTop: "8rem",
  opacity: 0.2,
};

export default function () {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0">
      <div
        // style={nightMode ? nightSky : daySky}
        style={daySky}
        className="absolute top-0 bottom-0 left-0 right-0 block z-0 h-full"
      ></div>
      <div
        // style={nightMode ? stars : clouds}
        style={clouds}
        className="absolute top-0 bottom-0 left-0 right-0 block z-10"
      ></div>
      <main className="max-w-xl mx-auto px-4">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
