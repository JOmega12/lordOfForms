import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";

export const FunctionalApp = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const [submittedUserData, setSubmittedUserData] = useState(null);

  const userData = {
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    phoneNumber: "",
  };

  return (
    <>
      <h2>Functional</h2>
      {isSubmit ? (
        <>
          <ProfileInformation userData={submittedUserData} isSubmit={true} />
          <FunctionalForm
            setIsSubmit={setIsSubmit}
            setSubmittedUserData={setSubmittedUserData}
          />
        </>
      ) : (
        <>
          <ProfileInformation userData={userData} isSubmit={isSubmit} />
          <FunctionalForm
            setIsSubmit={setIsSubmit}
            setSubmittedUserData={setSubmittedUserData}
          />
        </>
      )}
    </>
  );
};
