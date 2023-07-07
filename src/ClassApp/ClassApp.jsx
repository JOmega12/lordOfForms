import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";

const defaultUser = {
  email: "default@default.com",
  firstName: "Default",
  lastName: "Default",
  phone: "1234567",
  city: "Hobbiton",
};

export class ClassApp extends Component {
  state = {
    emailInput: '',
    firstNameInput: '',
    lastNameInput: '',
    phoneNumberInput: ['', '', '', ''],
    cityInput: '',
    isSubmit: false,
  }

  onChangeState = (state, value ) => {
    this.setState({[state]: value})
  }

  render() {
    const {emailInput, firstNameInput, lastNameInput, cityInput, phoneNumberInput, isSubmit} = this.state
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation
          userData={
            // toggle the following lines to change
            // null
            defaultUser
          }
        />
        <ClassForm emailInput={emailInput} firstNameInput={firstNameInput} lastNameInput={lastNameInput} phoneNumberInput={phoneNumberInput} cityInput ={cityInput} isSubmit={isSubmit}
        onChangeState={this.onChangeState}
        />
      </>
    );
  }
}
