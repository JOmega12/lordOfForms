import { Component } from "react"

export class ClassPhoneInput extends Component {
   
   render() {
      //addd props here
      const {type, id, placeholder, value, onChange, reference} = this.props;
      return(
         <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            ref={reference}
         />
         )
   }

}