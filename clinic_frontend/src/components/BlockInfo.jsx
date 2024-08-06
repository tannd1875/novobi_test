import React from "react";

const BlockInfo = ({ label, value, type, handleData, patientStatus }) => {
  return (
    <div className="flex gap-4 mb-8">
      <label className="inline text-xl pt-3 pb-2 w-24 text-left text-black">
        {label}
      </label>
      <input
        disabled={patientStatus === "Inactive" ? true : false}
        type={type}
        className={`bg-transparent pl-10 py-2
        //  border-black border rounded-sm text-black w-96 ${
          patientStatus === "Inactive" ? "hover:cursor-not-allowed" : null
        }`}
        defaultValue={value}
        placeholder={
          label === "Line 1"
            ? "Main address"
            : label === "Line 2"
            ? "Other address"
            : label
        }
        onChange={handleData}
      />
    </div>
  );
};

export default BlockInfo;
