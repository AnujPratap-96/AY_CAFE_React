// ContactWrapper.js
import React, { Suspense , lazy } from "react";
// Import the shimmer component
import ContactShimmer from "../Shimmer UI/ContactShimmer";

const ContactUS = lazy(() => import("./ContactUs")); // Lazy load the ContactUS component

export default function ContactWrapper() {
  return (
    <Suspense fallback={<ContactShimmer />}>
      <ContactUS />
    </Suspense>
  );
}
