import { Component } from "react";

export class ClassTextInput extends Component {

   render() {
      const {label, placeholder, onChange, value, list} = this.props;
      return(
         <>
            <label>{label}:</label>
            <input
               placeholder={placeholder}
               onChange={onChange}
               value={value}
               list={list}
            />
      </>
         )
   }
}