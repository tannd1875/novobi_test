import React from "react";
import { Link } from "react-router-dom";
import { CreateNewPatient, UpdatePatient } from "../utils/api";

const ButtonBlock = ({ action, data }) => {
  return (
    <div className="float-right my-4">
      <Link to={"/"}>
        <button className="text-xl font-bold min-w-40 py-2 border rounded-md hover:bg-gray-300">
          Back
        </button>
      </Link>
      {data.status === "Inactive" && !data.deactivateReason ? null : (
        <Link to={"/"}>
          <button
            className={`text-xl font-bold min-w-40 py-2 border rounded-md ml-4 hover:cursor-pointer hover:bg-green-500
            `}
            onClick={() => {
              console.log(data);
              if (action === "add") {
                CreateNewPatient(data);
              } else UpdatePatient(data);
            }}
          >
            {action === "add"
              ? "Add"
              : action === "update"
              ? "Update"
              : "Deactivate"}
          </button>
        </Link>
      )}
    </div>
  );
};

export default ButtonBlock;
