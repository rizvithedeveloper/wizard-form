import React from "react";
import styled from "styled-components";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const InputField = ({
  label,
  type,
  placeholder,
  required,
  width,
  selectIcon,
  textarea,
  value,
  onInputChange,
}) => {
  const handleChange = (event) => {
    document.getElementById("ErrorMessage").style.display = "none";
    onInputChange(event.target.value);
  };
  return (
    <InputGroup style={{ width: width }}>
      <Label>
        {label} {required && <span>*</span>}
      </Label>
      <FormGroup>
        {textarea ? (
          <Textarea
            type={type}
            placeholder={placeholder}
            required={required}
            onChange={handleChange}
          />
        ) : (
          <Input
            type={type}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={handleChange}
          />
        )}

        {selectIcon && (
          <Icon>
            <KeyboardArrowDownIcon />
          </Icon>
        )}
      </FormGroup>
    </InputGroup>
  );
};

const InputGroup = styled.div`
  position: relative;
  padding: 5px 10px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-size: 11px;
  position: absolute;
  background-color: #fff;
  top: -8px;
  padding: 3px 8px;
  color: #8c8c8c;

  span {
    color: #ff0000;
  }
`;

const FormGroup = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 5px;
  color: #8c8c8c;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 5px;
  color: #8c8c8c;
  height: 100px;
`;

const Icon = styled.div`
  background-color: #dee2e6;
  color: #8c8c8c;
  position: absolute;
  height: 100%;
  width: 32px;
  padding: 0 5px;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
`;

export default InputField;
