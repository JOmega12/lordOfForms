import { useRef } from "react";


export const FunctionalPhoneInput = ({phoneInputState, setPhoneInputState }) => 
{

   const refs = [useRef(), useRef(), useRef(), useRef()];

   const ref0 = refs[0];
   const ref1 = refs[1];
   const ref2 = refs[2];
   const ref3 = refs[3];

   const createOnChangeHandler = (index) => (e) => {
      const lengths = [2, 2, 2, 1];
      const currentMaxLength = lengths[index];
      const nextRef = refs[index + 1]?.current;
      const prevRef = refs[index - 1]?.current;
      let value = e.target.value;
      value = value.replace(/[^0-9]/g, "");
      value = value.slice(0, currentMaxLength);
      const shouldGoNextRef = currentMaxLength === value.length && nextRef;
      const shouldGoPrevRef = value.length === 0 && prevRef;
  
      const newState = phoneInputState.map((phoneInput, phoneInputIndex) => {
        return index === phoneInputIndex ? value : phoneInput;
      });
  
      if (shouldGoNextRef) {
        nextRef.focus();
      }
      if (shouldGoPrevRef) {
        prevRef.focus();
      }
      setPhoneInputState(newState);
    };



   return (

         <div id="phone-input-wrap">
          <input
            type="text"
            id="phone-input-1"
            placeholder="55"
            value={phoneInputState[0].slice(0, 2)}
            onChange={createOnChangeHandler(0)}
            ref={ref0}
          />
          -
          <input
            type="text"
            id="phone-input-2"
            placeholder="55"
            value={phoneInputState[1].slice(0, 2)}
            onChange={createOnChangeHandler(1)}
            ref={ref1}
          />
          -
          <input
            type="text"
            id="phone-input-3"
            placeholder="55"
            value={phoneInputState[2].slice(0, 2)}
            onChange={createOnChangeHandler(2)}
            ref={ref2}
          />
          -
          <input
            type="text"
            id="phone-input-4"
            placeholder="5"
            value={phoneInputState[3].slice(0, 2)}
            onChange={createOnChangeHandler(3)}
            ref={ref3}
          />
        </div>
   );

   
   
}