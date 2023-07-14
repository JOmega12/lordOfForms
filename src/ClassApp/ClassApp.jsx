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
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: ["", "", "", ""],
    city: "",
    isSubmit: false,
    submittedUserData: {},
  };

  resetState = () => {
    this.setState({
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: ["", "", "", ""],
      city: "",
    });
  };

  onChangeState = (state, value) => {
    this.setState({ [state]: value });
  };

  onSubmitFunc = (bool) => {
    this.setState({ isSubmit: bool });
  };

  onSubmitUserData = (data) => {
    this.setState({ submittedUserData: data });
  };

  render() {
    const {
      email,
      firstName,
      lastName,
      city,
      phoneNumber,
      isSubmit,
      submittedUserData,
    } = this.state;
    return (
      <>
        <h2>Class</h2>
        {isSubmit ? (
          <>
            <ProfileInformation
              // userData={isSubmit ? { ...this.state } : defaultUser}
              userData={submittedUserData}
              isSubmit={isSubmit}
              defaultUser={defaultUser}
            />
            <ClassForm
              emailInput={email}
              firstNameInput={firstName}
              lastNameInput={lastName}
              phoneNumberInput={phoneNumber}
              cityInput={city}
              onChangeState={this.onChangeState}
              onSubmitFunc={this.onSubmitFunc}
              resetState={this.resetState}
              onSubmitUserData={this.onSubmitUserData}
            />
          </>
        ) : (
          <>
            <ProfileInformation
              userData={defaultUser}
              isSubmit={isSubmit}
              defaultUser={defaultUser}
            />
            <ClassForm
              emailInput={email}
              firstNameInput={firstName}
              lastNameInput={lastName}
              phoneNumberInput={phoneNumber}
              cityInput={city}
              onChangeState={this.onChangeState}
              onSubmitFunc={this.onSubmitFunc}
              resetState={this.resetState}
              onSubmitUserData={this.onSubmitUserData}
            />
          </>
        )}
      </>
    );
  }
}
