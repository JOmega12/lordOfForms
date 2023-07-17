import { useRef, useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { allCities } from "../utils/all-cities";
import { isEmailValid } from "../utils/validations";
import { FunctionalPhoneInput } from "./FunctionalPhoneInput";
import { FunctionalTextInput } from "./FunctionalTextInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({
  firstNameInput,
  setFirstNameInput,
  lastNameInput,
  setLastNameInput,
  emailInput,
  setEmailInput,
  cityInput,
  setCityInput,
  phoneInputState,
  setPhoneInputState,
  setIsSubmit,
  setSubmittedUserData,
}) => {
  const [isSubmitForm, setSubmitForm] = useState(false);

  const refs = [useRef(), useRef(), useRef(), useRef()];

  const ref0 = refs[0];
  const ref1 = refs[1];
  const ref2 = refs[2];
  const ref3 = refs[3];

  const firstNameValid = firstNameInput.length > 2;
  const lastNameValid = lastNameInput.length > 2;
  const emailValid = isEmailValid(emailInput);
  const isValidCity = allCities.includes(cityInput);
  const phoneNumberValue = phoneInputState.join("").length === 7;

  const showFirstNameError = isSubmitForm && !firstNameValid;
  // (!firstNameValid || firstNameInput.length === 0);
  const showLastNameError = isSubmitForm && !lastNameValid;

  const showEmailError = isSubmitForm && !emailValid;

  const showCityError = isSubmitForm && !isValidCity;
  const showPhoneError = isSubmitForm && !phoneNumberValue;
  // console.log(phoneNumberValue, 'phoneValue')

  const createOnChangeHandler = (index) => (e) => {
    const lengths = [2, 2, 2, 1];
    const currentMaxLength = lengths[index];
    const nextRef = refs[index + 1]?.current;
    const prevRef = refs[index - 1]?.current;
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, '');
    value = value.slice(0, currentMaxLength);
    const shouldGoNextRef = currentMaxLength === value.length && nextRef;
    const shouldGoPrevRef = value.length === 0 && prevRef;

    const newState = phoneInputState.map((phoneInput, phoneInputIndex) => {
      return index === phoneInputIndex ? value : phoneInput;
    });

    if (shouldGoNextRef) {
      nextRef.focus();
    }
    if (shouldGoPrevRef) {
      prevRef.focus();
    }
    setPhoneInputState(newState);
  };

  const resetForm = () => {
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setCityInput("");
    setPhoneInputState(["", "", "", ""]);
    // setIsSubmit(false);
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

      {/* first name input */}
      <div className="input-wrap">
        <FunctionalTextInput
          label='First Name'
          placeholder="Bilbo"
          onChange={(e) => setFirstNameInput(e.target.value)}
          value={firstNameInput}
        />
      </div>
      {showFirstNameError && (
        <ErrorMessage
          message={firstNameErrorMessage}
          show={showFirstNameError}
        />
      )}

      {/* last name input */}
      <div className="input-wrap">
        <FunctionalTextInput
          label='Last Name'
          placeholder="Baggins"
          onChange={(e) => setLastNameInput(e.target.value)}
          value={lastNameInput}
        />
      </div>
      {showLastNameError && (
        <ErrorMessage message={lastNameErrorMessage} show={showLastNameError} />
      )}

      {/* Email Input */}
      <div className="input-wrap">
        <FunctionalTextInput
          label='Email'
          placeholder="bilbo-baggins@adventurehobbits.net"
          onChange={(e) => setEmailInput(e.target.value)}
          value={emailInput}
        />
      </div>
      {showEmailError && (
        <ErrorMessage message={emailErrorMessage} show={showEmailError} />
      )}

      {/* City Input */}
      <div className="input-wrap">
        <FunctionalTextInput
          label='City'
          placeholder="Hobbiton"
          onChange={(e) => setCityInput(e.target.value)}
          value={cityInput}
          list="cityOptions"
        />
        <datalist id="cityOptions">
          {allCities.map((item) => (
            <option value={item} key={item} />
          ))}
        </datalist>
      </div>
      {showCityError && (
        <ErrorMessage message={cityErrorMessage} show={showCityError} />
      )}

      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <FunctionalPhoneInput
            type="text"
            id="phone-input-1"
            placeholder="55"
            value={phoneInputState[0].slice(0, 2)}
            onChange={createOnChangeHandler(0)}
            reference={ref0}
          />
          -
          <FunctionalPhoneInput
            type="text"
            id="phone-input-2"
            placeholder="55"
            value={phoneInputState[1].slice(0, 2)}
            onChange={createOnChangeHandler(1)}
            reference={ref1}
          />
          -
          <FunctionalPhoneInput
            type="text"
            id="phone-input-3"
            placeholder="55"
            value={phoneInputState[2].slice(0, 2)}
            onChange={createOnChangeHandler(2)}
            reference={ref2}
          />
          -
          <FunctionalPhoneInput
            type="text"
            id="phone-input-4"
            placeholder="5"
            value={phoneInputState[3].slice(0, 2)}
            onChange={createOnChangeHandler(3)}
            reference={ref3}
          />
        </div>
      </div>
      {showPhoneError && (
        <ErrorMessage message={phoneNumberErrorMessage} show={showPhoneError} />
      )}

      <input type="submit" value="Submit" />
    </form>
  );
};
