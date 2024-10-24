import { lazy, Suspense } from "react";

import React from "react";

const SelectedFood = lazy(() => import("./SelectedFood"));

export default function SelectedFoodWrapper() {
  return (
    <Suspense>
      <SelectedFood />
    </Suspense>
  );
}
