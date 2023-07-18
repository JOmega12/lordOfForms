import { Component, createRef } from "react";
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
  }
  render() {
    const {formIsSubmit} = this.state;

    const {emailInput,firstNameInput, lastNameInput, phoneNumberInput, cityInput,  onChangeState, onSubmitFunc, resetState, onSubmitUserData} = this.props;

    const refs = [createRef(), createRef(), createRef(), createRef()];

    const ref0 = refs[0];
    const ref1 = refs[1];
    const ref2 = refs[2];
    const ref3 = refs[3];
  
    const firstNameValid = firstNameInput.length > 2;
    const lastNameValid = lastNameInput.length > 2;
    const emailValid = isEmailValid(emailInput);
    const isValidCity = allCities.includes(cityInput);
    const phoneNumberValue = phoneNumberInput.join("").length === 7;
  
    const showFirstNameError = formIsSubmit && !firstNameValid;
    const showLastNameError = formIsSubmit && !lastNameValid;
    const showEmailError = formIsSubmit && !emailValid;
    const showCityError = formIsSubmit && !isValidCity;
    const showPhoneError = formIsSubmit && !phoneNumberValue;
  
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
          !firstNameValid &&
          !lastNameValid &&
          !emailValid &&
          !isValidCity &&
          !phoneNumberValue
        ) {
          alert('data is not right');
          onSubmitUserData(null);
          this.setState({formIsSubmit: true});
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
          this.setState({formIsSubmit: false});
          resetState();
        }
      }}
      >
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <div className="input-wrap">
          {/* <label>{"First Name"}:</label>
          <input 
            placeholder="Bilbo" 
            onChange={(e) => onChangeState('firstName', e.target.value)}
            value={firstNameInput}
          /> */}
          <ClassTextInput
            label= "First Name"
            placeholder="Bilbo" 
            onChange={(e) => onChangeState('firstName', e.target.value)}
            value={firstNameInput}
          />
          
        </div>
        {showFirstNameError && (
        <ErrorMessage message={firstNameErrorMessage} show={showFirstNameError} />
        )}

        {/* last name input */}
        <div className="input-wrap">
          {/* <label>{"Last Name"}:</label>
          <input placeholder="Baggins" 
          onChange={(e) => onChangeState("lastName", e.target.value)}
          value={lastNameInput}
          /> */}
          <ClassTextInput
            label= "Last Name"
            placeholder="Baggins" 
            onChange={(e) => onChangeState('lastName', e.target.value)}
            value={lastNameInput}
          />
        </div>
        {showLastNameError &&(
        <ErrorMessage message={lastNameErrorMessage} show={showLastNameError} />
        )}

        {/* Email Input */}
        <div className="input-wrap">
          {/* <label>{"Email"}:</label>
          <input placeholder="bilbo-baggins@adventurehobbits.net" 
          onChange={(e) => onChangeState("email", e.target.value)}
          value={emailInput}
          /> */}
          <ClassTextInput
            label= "Email"
            placeholder="bilbo-baggins@adventurehobbits.net" 
            onChange={(e) => onChangeState("email", e.target.value)}
            value={emailInput}
          />
        </div>
        {showEmailError && (
        <ErrorMessage message={emailErrorMessage} show={showEmailError} />
        )}

        {/* City Input */}
        <div className="input-wrap">
          {/* <label>{"City"}:</label>
          <input placeholder="Hobbiton" 
          onChange={(e) => onChangeState("city", e.target.value)}
          value={cityInput}
          list='cityOptions'
          /> */}

          <ClassTextInput
            label= "City"
            placeholder="Hobbiton" 
            onChange={(e) => onChangeState("city", e.target.value)}
            value={cityInput}
            list='cityOptions'
          />
          <datalist id="cityOptions">
            {allCities.map((item)=> (
              <option value={item} key ={item}></option>
            ))}
          </datalist>
        </div>
        {showCityError && (
        <ErrorMessage message={cityErrorMessage} show={showCityError} />
        )}

        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <div id="phone-input-wrap">
            <ClassPhoneInput 
              type="text" id="phone-input-1" placeholder="55" 
              value={phoneNumberInput[0]}
              onChange={createOnChangeHandler(0, 'phoneNumber')}
              reference={ref0}
            />
            -
            <ClassPhoneInput 
              type="text" id="phone-input-2" placeholder="55" 
              value={phoneNumberInput[1]}
              onChange={createOnChangeHandler(1, 'phoneNumber')}
              reference={ref1}
            />
            -
            <ClassPhoneInput 
              type="text" id="phone-input-3" placeholder="55" 
              value={phoneNumberInput[2]}
              onChange={createOnChangeHandler(2, 'phoneNumber')}
              reference={ref2}
            />
            -
            <ClassPhoneInput
              type="text" id="phone-input-4" placeholder="5" 
              value={phoneNumberInput[3]}
              onChange={createOnChangeHandler(3, 'phoneNumber')}
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
  }
}
