import React from "react";
import styled from "styled-components";
import InputField from "./InputField";

const CandidateType = ({
  hourlyRate,
  setHourlyRate,
  startDate,
  setStartDate,
  careerLevel,
  setCareerLevel,
  gender,
  setGender,
  equipmentSpecification,
  setEquipmentSpecification,
}) => {
  return (
    <FormWrap>
      <InputField
        name="hourlyRate"
        label="Hourly rate"
        placeholder="Enter Value..."
        type="number"
        required="required"
        value={hourlyRate}
        onInputChange={setHourlyRate}
        width="50%"
      />
      <InputField
        name="startDate"
        label="Expected start date"
        placeholder="Select date"
        type="date"
        required="required"
        width="50%"
        value={startDate}
        onInputChange={setStartDate}
      />
      <InputField
        name="careerLevel"
        label="Career Level"
        placeholder="Enter Value..."
        required="required"
        type="text"
        width="50%"
        value={careerLevel}
        onInputChange={setCareerLevel}
        selectIcon
      />
      <InputField
        name="gender"
        label="Gender"
        placeholder="Enter Value..."
        required="required"
        type="text"
        width="50%"
        value={gender}
        onInputChange={setGender}
        selectIcon
      />
      <InputField
        name="equipmentSpecification"
        label="Equipment Specification"
        placeholder="Write a description"
        required="required"
        width="100%"
        value={equipmentSpecification}
        onInputChange={setEquipmentSpecification}
        textarea
      />
    </FormWrap>
  );
};

const FormWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default CandidateType;
