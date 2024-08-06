import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState();
  const [deactivateInput, setDeactivateInput] = useState();

  return (
    <div className="relative">
      <div className="w-2/3 mx-auto">
        <h1 className="text-4xl text-center mt-24 mb-10 font-bold">
          This is Clinic patient management system
        </h1>
        <div
          className="text-2xl px-8 pt-10 pb-4 rounded-lg  text-center
      bg-emerald-400 text-white hover:cursor-pointer my-6 relative"
        >
          <div className="p-8 pt-10 border-2 border-white bg-transparent rounded-sm flex">
            <input
              type="text"
              className="bg-transparent pl-8 py-2
            placeholder-gray-200 border border-white rounded-sm grow"
              placeholder="Patient's information is required"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <Link
              to={
                searchInput
                  ? `/search-patient?action=update&query=${searchInput}`
                  : "#"
              }
              className={`px-4 py-2 ml-6 border rounded-sm ${
                searchInput
                  ? "hover:cursor-pointer hover:text-emerald-400 hover:bg-white"
                  : "hover:cursor-not-allowed"
              }`}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </div>

          <p className="absolute top-6 ml-6 z-10 bg-emerald-400 px-4 font-bold text-purple-700">
            Search Patient
          </p>
        </div>
        <div className="flex justify-between gap-6 w-full">
          <Link
            to="/add-patient?action=add"
            className="text-3xl pt-16 rounded-lg border w-80 text-center
      bg-teal-300 text-purple-700 font-medium"
          >
            Add Patient
          </Link>

          <div
            className="text-2xl px-8 pt-10 pb-4 rounded-lg  text-center
      bg-rose-300 text-white hover:cursor-pointer relative grow"
          >
            <div className="p-8 pt-10 border-2 border-white bg-transparent rounded-sm flex">
              <input
                type="text"
                className="bg-transparent pl-6 py-2
            placeholder-gray-200 border border-white rounded-sm grow"
                placeholder="Patient's information is required"
                onChange={(e) => setDeactivateInput(e.target.value)}
              />
              <Link
                to={
                  deactivateInput
                    ? `/search-patient?action=deactivate&query=${deactivateInput}`
                    : "#"
                }
                className={`px-4 py-2 ml-6 border rounded-sm ${
                  searchInput
                    ? "hover:cursor-pointer hover:text-rose-400 hover:bg-white"
                    : "hover:cursor-not-allowed"
                }`}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </div>
            <p className="absolute top-6 ml-6 z-10 bg-rose-300 px-4 font-bold text-purple-700">
              Deactivate Patient
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
