import { useRef } from "react";
import { ErrorMessage } from "../ErrorMessage";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cityRegex = /^[a-zA-Z\s]+$/;
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
  isSubmit,
  setIsSubmit,
}) => {
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const ref0 = refs[0];
  const ref1 = refs[1];
  const ref2 = refs[2];
  const ref3 = refs[3];

  const firstNameValid = firstNameInput.length < 2;
  const lastNameValid = lastNameInput.length < 2;
  const emailValid = emailRegex.test(emailInput);
  const cityValid = cityRegex.test(cityInput);
  const phoneNumberValue = phoneInputState.join("");

  const showFirstNameError = isSubmit && firstNameValid;
  const showLastNameError = isSubmit && lastNameValid;
  const showEmailError = isSubmit && !emailValid;
  const showCityError = isSubmit && !cityValid;
  const showPhoneError = isSubmit && phoneNumberValue.length !== 7;

  const createOnChangeHandler = (index) => (e) => {
    const lengths = [2, 2, 2, 1];
    const currentMaxLength = lengths[index];
    const nextRef = refs[index + 1]?.current;
    const prevRef = refs[index - 1]?.current;
    let value = e.target.value;
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSubmit(true);
        // setFirstNameInput('');
        // setLastNameInput('');
        // setEmailInput('');
        // setCityInput('');
        // setPhoneInputState(['', '', '', '']);
      }}
    >
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <div className="input-wrap">
        <label>{"First Name"}:</label>
        <input
          placeholder="Bilbo"
          onChange={(e) => setFirstNameInput(e.target.value)}
          value={isSubmit === true ? "" : firstNameInput}
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
        <label>{"Last Name"}:</label>
        <input
          placeholder="Baggins"
          onChange={(e) => setLastNameInput(e.target.value)}
          value={isSubmit === true ? "" : lastNameInput}
        />
      </div>
      {showLastNameError && (
        <ErrorMessage message={lastNameErrorMessage} show={showLastNameError} />
      )}

      {/* Email Input */}
      <div className="input-wrap">
        <label>{"Email"}:</label>
        <input
          placeholder="bilbo-baggins@adventurehobbits.net"
          onChange={(e) => setEmailInput(e.target.value)}
          value={isSubmit === true ? "" : emailInput}
        />
      </div>
      {showEmailError && (
        <ErrorMessage message={emailErrorMessage} show={showEmailError} />
      )}

      {/* City Input */}
      <div className="input-wrap">
        <label>{"City"}:</label>
        <input
          placeholder="Hobbiton"
          onChange={(e) => setCityInput(e.target.value)}
          value={isSubmit === true ? "" : cityInput}
        />
      </div>
      {showCityError && (
        <ErrorMessage message={cityErrorMessage} show={showCityError} />
      )}

      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <input
            type="text"
            id="phone-input-1"
            placeholder="55"
            value={isSubmit === true ? "" : phoneInputState[0].slice(0, 2)}
            onChange={createOnChangeHandler(0)}
            ref={ref0}
          />
          -
          <input
            type="text"
            id="phone-input-2"
            placeholder="55"
            value={isSubmit === true ? "" : phoneInputState[1].slice(0, 2)}
            onChange={createOnChangeHandler(1)}
            ref={ref1}
          />
          -
          <input
            type="text"
            id="phone-input-3"
            placeholder="55"
            value={isSubmit === true ? "" : phoneInputState[2].slice(0, 2)}
            onChange={createOnChangeHandler(2)}
            ref={ref2}
          />
          -
          <input
            type="text"
            id="phone-input-4"
            placeholder="5"
            value={isSubmit === true ? "" : phoneInputState[3].slice(0, 2)}
            onChange={createOnChangeHandler(3)}
            ref={ref3}
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
