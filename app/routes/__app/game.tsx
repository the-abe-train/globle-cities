import { lazy, Suspense, useState } from "react";
import Globe from "~/components/Globe";

export default function () {
  return (
    <div>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <Globe />
      <p>Test text</p>
      {/* </Suspense> */}
    </div>
  );
}
