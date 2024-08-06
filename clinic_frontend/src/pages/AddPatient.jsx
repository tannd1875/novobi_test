import React from "react";
import LayoutInfo from "../components/LayoutInfo";

const AddPatient = () => {
  return (
    <div className="w-4/5 mx-auto">
      <h1 className="my-10 text-3xl font-medium">
        Completely fill out the information below
      </h1>
      <LayoutInfo></LayoutInfo>
    </div>
  );
};

export default AddPatient;
