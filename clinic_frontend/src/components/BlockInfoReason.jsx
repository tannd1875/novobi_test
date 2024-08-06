import React from "react";

const BlockInfoReason = ({ handleData, value }) => {
  return (
    <div
      className="text-2xl pt-10 rounded-lg text-center
       text-white mb-6 relative"
    >
      <div className="px-4 pt-10 pb-4 border-2 border-black bg-transparent rounded-sm">
        <textarea
          className="w-full height-30 border text-black p-4"
          onChange={handleData}
          value={value}
          placeholder="Reason for deactivate is required!"
        >
          {value}
        </textarea>
        <p className="absolute top-6 ml-6 z-10 px-4 font-bold text-purple-600 bg-white">
          Deactivate Reason
        </p>
      </div>
    </div>
  );
};

export default BlockInfoReason;
