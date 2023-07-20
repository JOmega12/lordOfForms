import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { isCityValid, isEmailValid, isPhoneValid } from "../utils/validations";
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
    emailInput: "",
    firstNameInput: "",
    lastNameInput: "",
    phoneNumberInput: ["", "", "", ""],
    cityInput: "",
    formIsSubmit: false,
  };

  resetState = () => {
    this.setState({
      emailInput: "",
      firstNameInput: "",
      lastNameInput: "",
      phoneNumberInput: ["", "", "", ""],
      cityInput: "",
    });
  };

  onChangeState = (state, value) => {
    this.setState({ [state]: value });
  };

  render() {
    const {
      formIsSubmit,
      firstNameInput,
      lastNameInput,
      emailInput,
      cityInput,
      phoneNumberInput,
    } = this.state;

    const { onSubmitFunc, onSubmitUserData } = this.props;

    const firstNameValid = firstNameInput.length > 2;
    const lastNameValid = lastNameInput.length > 2;
    const emailValid = isEmailValid(emailInput);
    const isValidCity = isCityValid(cityInput);
    const phoneNumberValue = isPhoneValid(phoneNumberInput);

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
            this.resetState();
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
            this.resetState();
          }
        }}
      >
        <u>
          <h3>User Information Form</h3>
        </u>

        <ClassTextInput
          label="First Name"
          placeholder="Bilbo"
          onChange={(e) => this.onChangeState("firstNameInput", e.target.value)}
          value={firstNameInput}
          message={firstNameErrorMessage}
          show={showFirstNameError}
        />
        <ClassTextInput
          label="Last Name"
          placeholder="Baggins"
          onChange={(e) => this.onChangeState("lastNameInput", e.target.value)}
          value={lastNameInput}
          message={lastNameErrorMessage}
          show={showLastNameError}
        />
        <ClassTextInput
          label="Email"
          placeholder="bilbo-baggins@adventurehobbits.net"
          onChange={(e) => this.onChangeState("emailInput", e.target.value)}
          value={emailInput}
          message={emailErrorMessage}
          show={showEmailError}
        />
        <ClassTextInput
          label="City"
          placeholder="Hobbiton"
          onChange={(e) =>
            this.onChangeState("cityInput", e.target.value.toLowerCase())
          }
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
          onChangeState={this.onChangeState}
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
