import React from "react";
import LayoutInfo from "../components/LayoutInfo";

const DeactivatePatient = () => {
  return (
    <div className="w-4/5 mx-auto">
      <h1 className="my-10 text-3xl font-medium">
        Notice patient data carefully before DEACTIVATE!
      </h1>
      <LayoutInfo></LayoutInfo>
    </div>
  );
};

export default DeactivatePatient;
