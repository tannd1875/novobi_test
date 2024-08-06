import React, { act, useEffect, useState } from "react";
import BlockInfo from "../components/BlockInfo";
import BlockInfoSelected from "../components/BlockInfoSelected";
import BlockInfoReason from "../components/BlockInfoReason";
import ButtonBlock from "../components/ButtonBlock";
import { useSearchParams } from "react-router-dom";

const LayoutInfo = () => {
  const GenderList = ["Male", "Female", "Other"];
  const StatusList = ["Active", "Inactive"];

  const [searchParam] = useSearchParams();
  const action = searchParam.get("action");
  const queryKey = searchParam.get("query");
  const [fetching, setFetching] = useState(true);

  const GetPatientData = async (searchKey) => {
    await fetch(`https://localhost:7043/api/Patient?key=${searchKey}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data[0]) {
          setId(data[0].id);
          setFirstName(data[0].firstName);
          setLastName(data[0].lastName);
          setGender(data[0].gender);
          setDoB(data[0].dob.slice(0, 10));
          setStatus(data[0].status);
          setPhone(data[0].phoneNumber);
          setEmail(data[0].email);
          setLine1(data[0].line1);
          setLine2(data[0].line2);
          setDeactivateReason(data[0].deactivateReason);
        } else setFetching(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (action !== "add" && queryKey) GetPatientData(queryKey);
  }, [action, queryKey]);

  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState("Male");
  const [dob, setDoB] = useState();
  const [status, setStatus] = useState(action === "add" ? "Active" : "");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [line1, setLine1] = useState();
  const [line2, setLine2] = useState();
  const [deactivateReason, setDeactivateReason] = useState();

  const mergeData = (
    id,
    firstName,
    lastName,
    gender,
    dob,
    status,
    phone,
    email,
    line1,
    line2,
    deactivateReason
  ) => {
    return {
      id: id,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      dob: dob,
      status: status,
      phoneNumber: phone,
      email: email,
      line1: line1,
      line2: line2,
      deactivateReason: deactivateReason,
    };
  };

  return (
    <>
      {!fetching ? (
        <p>No information found</p>
      ) : (
        <div className="border-2 flex items-center">
          <div
            className="text-2xl px-4 pt-10 rounded-lg text-center w-1/2
         text-white mb-6 relative"
          >
            <div className="px-4 pt-10 border-2 border-black bg-transparent rounded-sm">
              <BlockInfo
                patientStatus={status}
                label={"First name"}
                type={"text"}
                value={firstName}
                handleData={(e) => setFirstName(e.target.value)}
              ></BlockInfo>
              <BlockInfo
                patientStatus={status}
                label={"Last name"}
                type={"text"}
                value={lastName}
                handleData={(e) => setLastName(e.target.value)}
              ></BlockInfo>
              <BlockInfoSelected
                patientStatus={status}
                label={"Gender"}
                value={gender}
                optionList={GenderList}
                action={action}
                handleData={(e) => setGender(e.target.value)}
              ></BlockInfoSelected>
              <BlockInfo
                patientStatus={status}
                label={"DoB"}
                type={"date"}
                value={dob}
                handleData={(e) => setDoB(e.target.value)}
              ></BlockInfo>
              <BlockInfoSelected
                patientStatus={status}
                label={"Status"}
                value={status}
                optionList={StatusList}
                action={action}
                handleData={(e) => {
                  setStatus(e.target.value);
                  console.log(status);
                }}
              ></BlockInfoSelected>
            </div>
            <p className="absolute top-6 ml-6 z-10 px-4 font-bold text-purple-600 bg-white">
              Demographics
            </p>
          </div>
          <div className="self-start w-1/2 flex flex-col">
            <div
              className="text-2xl px-4 pt-10 rounded-lg text-center
         text-white relative border-2 border-transparent"
            >
              <div className="px-4 pt-10 border-2 border-black bg-transparent rounded-sm">
                <BlockInfo
                  patientStatus={status}
                  label={"Phone"}
                  type={"text"}
                  value={phone}
                  handleData={(e) => setPhone(e.target.value)}
                ></BlockInfo>
                <BlockInfo
                  patientStatus={status}
                  label={"Email"}
                  type={"text"}
                  value={email}
                  handleData={(e) => setEmail(e.target.value)}
                ></BlockInfo>
              </div>
              <p className="absolute top-6 ml-6 z-10 px-4 font-bold text-purple-600 bg-white">
                Contact
              </p>
            </div>
            <div
              className="text-2xl px-4 pt-10 rounded-lg text-center
         text-white hover:cursor-pointer relative"
            >
              <div className="px-4 pt-10 border-2 border-black bg-transparent rounded-sm">
                <BlockInfo
                  patientStatus={status}
                  label={"Line 1"}
                  type={"text"}
                  value={line1}
                  handleData={(e) => setLine1(e.target.value)}
                ></BlockInfo>
                <BlockInfo
                  patientStatus={status}
                  label={"Line 2"}
                  type={"text"}
                  value={line2}
                  handleData={(e) => setLine2(e.target.value)}
                ></BlockInfo>
              </div>
              <p className="absolute top-6 ml-6 z-10 px-4 font-bold text-purple-600 bg-white">
                Address
              </p>
            </div>
          </div>
        </div>
      )}
      {action === "deactivate" ||
      (action === "update" && status === "Inactive") ? (
        <BlockInfoReason
          handleData={(e) => {
            setDeactivateReason(e.target.value);
          }}
          value={deactivateReason}
        ></BlockInfoReason>
      ) : null}
      <ButtonBlock
        action={action}
        data={
          fetching
            ? mergeData(
                id,
                firstName,
                lastName,
                gender,
                dob,
                status,
                phone,
                email,
                line1,
                line2,
                deactivateReason
              )
            : false
        }
      ></ButtonBlock>
    </>
  );
};

export default LayoutInfo;
