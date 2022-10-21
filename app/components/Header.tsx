// import { useNavigate, useSearchParams } from "react-router-dom";
// import { getPath } from "../util/svg";

import HelpIcon from "./icons/HelpIcon";
import SettingsIcon from "./icons/SettingsIcon";
import StatsIcon from "./icons/StatsIcon";

// @ts-ignore Testing this without ts

// type Props = {
//   setReSpin: React.Dispatch<React.SetStateAction<boolean>>;
//   setShowStats: React.Dispatch<React.SetStateAction<boolean>>;
// };

export default function Header() {
  // const { theme } = useContext(ThemeContext);
  const theme = { nightMode: false };
  // const navigate = useNavigate();
  // Set up practice mode
  // const [params] = useSearchParams();
  // const practiceMode = !!params.get("practice_mode");

  // function reRenderGlobe() {
  //   setReSpin(true);
  //   if (practiceMode) {
  //     return navigate("/");
  //   }
  //   navigate("/game");
  // }

  const svgColour = theme.nightMode ? "rgb(209 213 219)" : "black";

  return (
    <header className="mt-8 h-10 relative dark:text-gray-200 z-10">
      <div className="relative h-full">
        <div className="space-x-1 flex absolute left-0 bottom-1">
          <button aria-label="Help">
            <HelpIcon />
          </button>
        </div>
        <button
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 "
          // onClick={reRenderGlobe}
        >
          <h1 className="text-3xl font-extrabold">GLOBLE: CITIES</h1>
        </button>
        <div className="space-x-1 flex absolute right-0 bottom-1">
          <button aria-label="Statistics">
            <StatsIcon />
          </button>
          <button aria-label="Settings">
            <SettingsIcon />
          </button>
        </div>
      </div>
      <hr className="bottom-0 border-black" />
    </header>
  );
}
