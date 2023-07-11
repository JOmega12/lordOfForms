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

  //something about userData being the state
  // i know that the logic is that when I press the submit button,
  //it would show the info but it wouldnt update.
  //but how?
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
            isSubmit={isSubmit}
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
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
          />
        </>
      )}
    </>
  );
};
