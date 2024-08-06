import React from "react";

const BlockInfoSelected = ({
  label,
  value,
  patientStatus,
  optionList,
  action,
  handleData,
}) => {
  return (
    <div className="flex gap-4 mb-8">
      <label className="inline text-xl pt-3 pb-2 w-24 text-left text-black">
        {label}
      </label>
      <select
        className={`bg-transparent text-black pl-10 py-2 pr-8
           border border-black rounded-sm  w-96  ${
             patientStatus === "Inactive" && label !== "Status"
               ? "hover:cursor-not-allowed"
               : null
           }`}
        onChange={handleData}
        value={value}
        disabled={
          patientStatus === "Inactive" && label !== "Status" ? true : false
        }
      >
        {action === "add" && label === "Status" ? (
          <option value={"Active"}>Active</option>
        ) : action === "deactivate" && label === "Status" ? (
          <option value={"Inactive"}>Inactive</option>
        ) : (
          optionList.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default BlockInfoSelected;
