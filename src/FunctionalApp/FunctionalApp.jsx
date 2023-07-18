import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";

export const FunctionalApp = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [phoneInputState, setPhoneInputState] = useState(["", "", "", ""]);
  const [isSubmit, setIsSubmit] = useState(false);

  const [submittedUserData, setSubmittedUserData] = useState({});

  //currently when the button is clicked and the forms are reset, the input errors come alive. How do I unalive it?
  const userData = {
    email: emailInput,
    firstName: firstNameInput,
    lastName: lastNameInput,
    city: cityInput,
    phoneNumber: phoneInputState,
  };

  return (
    <>
      <h2>Functional</h2>
      {isSubmit ? (
        <>
          <ProfileInformation userData={submittedUserData} isSubmit={true} />
          <FunctionalForm
            firstNameInput={firstNameInput}
            lastNameInput={lastNameInput}
            emailInput={emailInput}
            cityInput={cityInput}
            phoneInputState={phoneInputState}
            setFirstNameInput={setFirstNameInput}
            setLastNameInput={setLastNameInput}
            setEmailInput={setEmailInput}
            setCityInput={setCityInput}
            setPhoneInputState={setPhoneInputState}
            setIsSubmit={setIsSubmit}
            setSubmittedUserData={setSubmittedUserData}
          />
        </>
      ) : (
        <>
          <ProfileInformation userData={userData} isSubmit={isSubmit} />
          <FunctionalForm
            firstNameInput={firstNameInput}
            lastNameInput={lastNameInput}
            emailInput={emailInput}
            cityInput={cityInput}
            phoneInputState={phoneInputState}
            setFirstNameInput={setFirstNameInput}
            setLastNameInput={setLastNameInput}
            setEmailInput={setEmailInput}
            setCityInput={setCityInput}
            setPhoneInputState={setPhoneInputState}
            setIsSubmit={setIsSubmit}
            setSubmittedUserData={setSubmittedUserData}
          />
        </>
      )}
    </>
  );
};
