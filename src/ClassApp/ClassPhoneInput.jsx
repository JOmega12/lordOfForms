import { Component, createRef } from "react";

export class ClassPhoneInput extends Component {
  render() {
    const { onChangeState, phoneNumberInput } = this.props;

    const refs = [createRef(), createRef(), createRef(), createRef()];

    const ref0 = refs[0];
    const ref1 = refs[1];
    const ref2 = refs[2];
    const ref3 = refs[3];

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
      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <input
            type="text"
            id="phone-input-1"
            placeholder="55"
            value={phoneNumberInput[0]}
            onChange={createOnChangeHandler(0, "phoneNumber")}
            ref={ref0}
          />
          -
          <input
            type="text"
            id="phone-input-2"
            placeholder="55"
            value={phoneNumberInput[1]}
            onChange={createOnChangeHandler(1, "phoneNumber")}
            ref={ref1}
          />
          -
          <input
            type="text"
            id="phone-input-3"
            placeholder="55"
            value={phoneNumberInput[2]}
            onChange={createOnChangeHandler(2, "phoneNumber")}
            ref={ref2}
          />
          -
          <input
            type="text"
            id="phone-input-4"
            placeholder="5"
            value={phoneNumberInput[3]}
            onChange={createOnChangeHandler(3, "phoneNumber")}
            ref={ref3}
          />
        </div>
      </div>
    );
  }
}
