import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Notification = ({ icon, title, check }) => {
  console.log(check);
  const iconColorMapping = {
    "circle-exclamation": "text-orange-500",
    "circle-check": "text-teal-500",
  };
  return (
    <div
      className={`flex justify-between w-96 rounded-md
     border-black border-2 bg-transparent absolute -top-24 right-10 mt-2
       ${!check ? "visible" : "hidden"}`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`text-2xl py-8 mx-auto ${iconColorMapping[icon.iconName]}`}
      />
      <p className="text-xl w-80 py-8">{title}</p>
    </div>
  );
};

export default Notification;
