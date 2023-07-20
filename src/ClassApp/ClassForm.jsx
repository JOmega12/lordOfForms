import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { isEmailValid } from "../utils/validations";
import { allCities } from "../utils/all-cities";
import { ClassPhoneInput } from "./ClassPhoneInput";
import { ClassTextInput } from "./ClassTextInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export class ClassForm extends Component {
  state = {
    formIsSubmit: false,
  };
  render() {
    const { formIsSubmit } = this.state;

    const {
      emailInput,
      firstNameInput,
      lastNameInput,
      phoneNumberInput,
      cityInput,
      onChangeState,
      onSubmitFunc,
      resetState,
      onSubmitUserData,
    } = this.props;

    const firstNameValid = firstNameInput.length > 2;
    const lastNameValid = lastNameInput.length > 2;
    const emailValid = isEmailValid(emailInput);
    const isValidCity = allCities
      .map((city) => city.toLowerCase())
      .includes(cityInput.toLowerCase());
    const phoneNumberValue = phoneNumberInput.join("").length === 7;

    const showFirstNameError = formIsSubmit && !firstNameValid;
    const showLastNameError = formIsSubmit && !lastNameValid;
    const showEmailError = formIsSubmit && !emailValid;
    const showCityError = formIsSubmit && !isValidCity;
    const showPhoneError = formIsSubmit && !phoneNumberValue;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault(e);
          if (
            !firstNameValid ||
            !lastNameValid ||
            !emailValid ||
            !isValidCity ||
            !phoneNumberValue
          ) {
            alert("data is not right");
            onSubmitUserData(null);
            this.setState({ formIsSubmit: true });
            resetState();
          } else {
            onSubmitUserData({
              email: emailInput,
              firstName: firstNameInput,
              lastName: lastNameInput,
              city: cityInput,
              phoneNumber: phoneNumberInput,
            });
            onSubmitFunc(true);
            this.setState({ formIsSubmit: false });
            resetState();
          }
        }}
      >
        <u>
          <h3>User Information Form</h3>
        </u>

        <ClassTextInput
          label="First Name"
          placeholder="Bilbo"
          onChange={(e) => onChangeState("firstName", e.target.value)}
          value={firstNameInput}
          message={firstNameErrorMessage}
          show={showFirstNameError}
        />
        <ClassTextInput
          label="Last Name"
          placeholder="Baggins"
          onChange={(e) => onChangeState("lastName", e.target.value)}
          value={lastNameInput}
          message={lastNameErrorMessage}
          show={showLastNameError}
        />
        <ClassTextInput
          label="Email"
          placeholder="bilbo-baggins@adventurehobbits.net"
          onChange={(e) => onChangeState("email", e.target.value)}
          value={emailInput}
          message={emailErrorMessage}
          show={showEmailError}
        />
        <ClassTextInput
          label="City"
          placeholder="Hobbiton"
          onChange={(e) => onChangeState("city", e.target.value.toLowerCase())}
          value={cityInput}
          list="cityOptions"
          message={cityErrorMessage}
          show={showCityError}
        />
        <datalist id="cityOptions">
          {allCities.map((item) => (
            <option value={item} key={item}></option>
          ))}
        </datalist>

        <ClassPhoneInput
          phoneNumberInput={phoneNumberInput}
          onChangeState={onChangeState}
        />
        {showPhoneError && (
          <ErrorMessage
            message={phoneNumberErrorMessage}
            show={showPhoneError}
          />
        )}

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
