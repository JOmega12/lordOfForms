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
    isSubmit: false,
    submittedUserData: null,
  };

  onSubmitFunc = (bool) => {
    this.setState({ isSubmit: bool });
  };

  onSubmitUserData = (data) => {
    this.setState({ submittedUserData: data });
  };

  render() {
    const { isSubmit, submittedUserData } = this.state;
    return (
      <>
        <h2>Class</h2>
        {isSubmit ? (
          <>
            <ProfileInformation
              userData={submittedUserData}
              isSubmit={isSubmit}
              defaultUser={defaultUser}
            />
            <ClassForm
              onSubmitFunc={this.onSubmitFunc}
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
              onSubmitFunc={this.onSubmitFunc}
              onSubmitUserData={this.onSubmitUserData}
            />
          </>
        )}
      </>
    );
  }
}
