const CreateNewPatient = (patient) => {
  fetch("https://localhost:7043/api/Patient", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: patient.firstName,
      lastName: patient.lastName,
      gender: patient.gender,
      dob: patient.dob,
      status: patient.status,
      phoneNumber: patient.phoneNumber,
      email: patient.email,
      line1: patient.line1,
      line2: patient.line2,
    }),
  })
    .then((response) => {
      return response.ok;
    })
    .then((error) => console.log(error));
};

const UpdatePatient = (patient) => {
  fetch("https://localhost:7043/api/Patient", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: patient.id,
      firstName: patient.firstName,
      lastName: patient.lastName,
      gender: patient.gender,
      dob: patient.dob,
      status: patient.status,
      phoneNumber: patient.phoneNumber,
      email: patient.email,
      line1: patient.line1,
      line2: patient.line2,
      deactivateReason: patient.deactivateReason,
    }),
  })
    .then((response) => {
      return response.ok;
    })
    .then((error) => console.log(error));
};

const DeactivatePatient = (patient) => {
  console.log(patient.deactivateReason);
  fetch("https://localhost:7043/api/Patient", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: patient.id,
      firstName: patient.firstName,
      lastName: patient.lastName,
      gender: patient.gender,
      dob: patient.dob,
      status: patient.status,
      phoneNumber: patient.phoneNumber,
      email: patient.email,
      line1: patient.line1,
      line2: patient.line2,
      deactivateReason: patient.deactivateReason,
    }),
  })
    .then((response) => {
      return response.ok;
    })
    .then((error) => console.log(error));
};

module.exports = {
  UpdatePatient,
  CreateNewPatient,
  DeactivatePatient,
};
