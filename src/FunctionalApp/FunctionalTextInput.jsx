import { ErrorMessage } from "../ErrorMessage";

export const FunctionalTextInput = ({
  label,
  placeholder,
  onChange,
  value,
  list,
  message,
  show,
}) => {
  return (
    <>
      <div className="input-wrap">
        <label>{label}:</label>
        <input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          list={list}
        />
      </div>
      {show &&
      <ErrorMessage message={message} show={show} />
      }
    </>
  );
};
