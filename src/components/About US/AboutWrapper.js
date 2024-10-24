// About.js
import React, { Suspense , lazy } from "react";
import AboutShimmer from "../Shimmer UI/AboutShimmer"; // Import Shimmer component

const About = lazy(() => import("./About")); // Load your actual content dynamically

export default function AboutWrapper() {
  return (
    <Suspense fallback={<AboutShimmer />}>
      <About />
    </Suspense>
  );
}
