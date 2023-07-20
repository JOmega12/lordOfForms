import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { allCities } from "../utils/all-cities";
import { isCityValid, isEmailValid, isPhoneValid } from "../utils/validations";
import { FunctionalPhoneInput } from "./FunctionalPhoneInput";
import { FunctionalTextInput } from "./FunctionalTextInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({ setIsSubmit, setSubmittedUserData }) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [phoneInputState, setPhoneInputState] = useState(["", "", "", ""]);
  const [isSubmitForm, setSubmitForm] = useState(false);

  const firstNameValid = firstNameInput.length > 2;
  const lastNameValid = lastNameInput.length > 2;
  const emailValid = isEmailValid(emailInput);
  const isValidCity = isCityValid(cityInput);
  const phoneNumberValue = isPhoneValid(phoneInputState);

  const showFirstNameError = isSubmitForm && !firstNameValid;
  const showLastNameError = isSubmitForm && !lastNameValid;

  const showEmailError = isSubmitForm && !emailValid;

  const showCityError = isSubmitForm && !isValidCity;
  const showPhoneError = isSubmitForm && !phoneNumberValue;

  const resetForm = () => {
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setCityInput("");
    setPhoneInputState(["", "", "", ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstNameValid ||
      !lastNameValid ||
      !emailValid ||
      !isValidCity ||
      !phoneNumberValue
    ) {
      alert("data is not right");
      setSubmittedUserData(null);
      setSubmitForm(true);
      return;
    } else {
      setSubmittedUserData({
        email: emailInput,
        firstName: firstNameInput,
        lastName: lastNameInput,
        city: cityInput,
        phoneNumber: phoneInputState,
      });
      setIsSubmit(true);
      setSubmitForm(false);
      resetForm();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <u>
        <h3>User Information Form</h3>
      </u>

      <FunctionalTextInput
        label="First Name"
        placeholder="Bilbo"
        onChange={(e) => setFirstNameInput(e.target.value)}
        value={firstNameInput}
        message={firstNameErrorMessage}
        show={showFirstNameError}
      />
      <FunctionalTextInput
        label="Last Name"
        placeholder="Baggins"
        onChange={(e) => setLastNameInput(e.target.value)}
        value={lastNameInput}
        message={lastNameErrorMessage}
        show={showLastNameError}
      />
      <FunctionalTextInput
        label="Email"
        placeholder="bilbo-baggins@adventurehobbits.net"
        onChange={(e) => setEmailInput(e.target.value)}
        value={emailInput}
        message={emailErrorMessage}
        show={showEmailError}
      />
      <FunctionalTextInput
        label="City"
        placeholder="Hobbiton"
        onChange={(e) => setCityInput(e.target.value.toLowerCase())}
        value={cityInput}
        list="cityOptions"
        message={cityErrorMessage}
        show={showCityError}
      />
      <datalist id="cityOptions">
        {allCities.map((item) => (
          <option value={item} key={item} />
        ))}
      </datalist>

      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <FunctionalPhoneInput
          phoneInputState={phoneInputState}
          setPhoneInputState={setPhoneInputState}
        />
      </div>
      {showPhoneError && (
        <ErrorMessage message={phoneNumberErrorMessage} show={showPhoneError} />
      )}

      <input type="submit" value="Submit" />
    </form>
  );
};
