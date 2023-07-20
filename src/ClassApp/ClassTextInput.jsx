import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";

export class ClassTextInput extends Component {
  render() {
    const {
      label,
      placeholder,
      onChange,
      value,
      list,
      message,
      show} = this.props;
    return (
      <>
        <div className="input-wrap">
          <label>{label}:</label>
          <input
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            list={list}
          />
        </div>
        {show && (
          <ErrorMessage
            message={message}
            show={show}
          />
        )}
      </>
    );
  }
}
