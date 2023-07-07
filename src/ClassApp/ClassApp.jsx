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
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: ['', '', '', ''],
    city: '',
    isSubmit: false,
  }

  onChangeState = (state, value ) => {
    this.setState({[state]: value})
  }

  onSubmitFunc = (bool) => {
    this.setState({isSubmit: bool})
  }

  render() {
    const {email, firstName, lastName, city, phoneNumber, isSubmit} = this.state;
    console.log({...this.state})
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation
          userData={
            // toggle the following lines to change
            // null
            isSubmit ? { ...this.state } : defaultUser
          }
        />
        <ClassForm emailInput={email} firstNameInput={firstName} lastNameInput={lastName} phoneNumberInput={phoneNumber} cityInput ={city} isSubmit={isSubmit}
        onChangeState={this.onChangeState}
        onSubmitFunc={this.onSubmitFunc}
        />
      </>
    );
  }
}
