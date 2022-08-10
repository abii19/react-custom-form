import { useState, useRef } from "react";
const FormSelect = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, placeholder, keys, ...selectProps } =
    props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <>
      <div className="">
        <label>{label}</label>
        <select
          {...selectProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        >
          <option value="">{placeholder}</option>
          {keys.map((key, index) => {
            return (
              <option key={index} value={key.value}>
                {key.name}
              </option>
            );
          })}
        </select>
        <div className="error">{errorMessage}</div>
      </div>
    </>
  );
};

export default FormSelect;
