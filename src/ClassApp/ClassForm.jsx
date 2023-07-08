import { Component, createRef } from "react";
import { ErrorMessage } from "../ErrorMessage";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cityRegex = /^[a-zA-Z\s]+$/;
export class ClassForm extends Component {
  render() {
    const {emailInput,firstNameInput, lastNameInput, phoneNumberInput, cityInput, isSubmit, onChangeState, onSubmitFunc, resetState} = this.props;

    const refs = [createRef(), createRef(), createRef(), createRef()];

    const ref0 = refs[0];
    const ref1 = refs[1];
    const ref2 = refs[2];
    const ref3 = refs[3];
  
    const firstNameValid = firstNameInput.length < 2;
    const lastNameValid = lastNameInput.length < 2;
    const emailValid = emailRegex.test(emailInput);
    const cityValid = cityRegex.test(cityInput);
    const phoneNumberValue = phoneNumberInput.join("");
  
    const showFirstNameError = isSubmit && firstNameValid;
    const showLastNameError = isSubmit && lastNameValid;
    const showEmailError = isSubmit && !emailValid;
    const showCityError = isSubmit && !cityValid;
    const showPhoneError = isSubmit && phoneNumberValue.length !== 7;
  
    const createOnChangeHandler = (index, stateKey) => (e) => {
      const lengths = [2, 2, 2, 1];
      const currentMaxLength = lengths[index];
      const nextRef = refs[index + 1]?.current;
      const prevRef = refs[index - 1]?.current;
      let value = e.target.value;
      value = value.slice(0, currentMaxLength);
      const shouldGoNextRef = currentMaxLength === value.length && nextRef;
      const shouldGoPrevRef = value.length === 0 && prevRef;
  
      const newState = phoneNumberInput.map((phoneInput, phoneInputIndex) => {
        return index === phoneInputIndex ? value : phoneInput;
      });
  
      if (shouldGoNextRef) {
        nextRef.focus();
      }
      if (shouldGoPrevRef) {
        prevRef.focus();
      }
      onChangeState(stateKey, newState);
    };

    return (
      <form 
      onSubmit={ (e)=> {
        e.preventDefault(e)
        if(
          firstNameValid &&
          lastNameValid &&
          !emailValid &&
          !cityValid &&
          phoneNumberValue.length !== 7
        ) {
          onSubmitFunc(false);
          resetState();
        } else {
          onSubmitFunc(true)
        }
      }}
      >
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <div className="input-wrap">
          <label>{"First Name"}:</label>
          <input placeholder="Bilbo" 
            onChange={(e) => onChangeState('firstName', e.target.value)}
            value={firstNameInput}
          />
          
        </div>
        {showFirstNameError && (
        <ErrorMessage message={firstNameErrorMessage} show={showFirstNameError} />
        )}

        {/* last name input */}
        <div className="input-wrap">
          <label>{"Last Name"}:</label>
          <input placeholder="Baggins" 
          onChange={(e) => onChangeState("lastName", e.target.value)}
          value={lastNameInput}
          />
        </div>
        {showLastNameError &&(
        <ErrorMessage message={lastNameErrorMessage} show={showLastNameError} />
        )}

        {/* Email Input */}
        <div className="input-wrap">
          <label>{"Email"}:</label>
          <input placeholder="bilbo-baggins@adventurehobbits.net" 
          onChange={(e) => onChangeState("email", e.target.value)}
          value={emailInput}
          />
        </div>
        {showEmailError && (
        <ErrorMessage message={emailErrorMessage} show={showEmailError} />
        )}

        {/* City Input */}
        <div className="input-wrap">
          <label>{"City"}:</label>
          <input placeholder="Hobbiton" 
          onChange={(e) => onChangeState("city", e.target.value)}
          value={cityInput}
          />
        </div>
        {showCityError && (
        <ErrorMessage message={cityErrorMessage} show={showCityError} />
        )}

        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <div id="phone-input-wrap">
            <input type="text" id="phone-input-1" placeholder="55" 
            value={phoneNumberInput[0]}
            onChange={createOnChangeHandler(0, 'phoneNumber')}
            ref={ref0}
            />
            -
            <input type="text" id="phone-input-2" placeholder="55" 
            value={phoneNumberInput[1]}
            onChange={createOnChangeHandler(1, 'phoneNumber')}
            ref={ref1}
            />
            -
            <input type="text" id="phone-input-3" placeholder="55" 
            value={phoneNumberInput[2]}
            onChange={createOnChangeHandler(2, 'phoneNumber')}
            ref={ref2}
            />
            -
            <input type="text" id="phone-input-4" placeholder="5" 
            value={phoneNumberInput[3]}
            onChange={createOnChangeHandler(3, 'phoneNumber')}
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
  }
}
