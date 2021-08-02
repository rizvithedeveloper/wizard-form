import React from "react";
import styled from "styled-components";
import InputField from "./InputField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const JobInformation = ({
  jobType,
  setJobType,
  experience,
  setExperience,
  education,
  setEducation,
  skills,
  setSkills,
  description,
  setDescription,
  templateFile,
  setTemplateFile,
}) => {
  return (
    <FormWrap>
      <InputField
        name="LookingFor"
        label="Looking For"
        placeholder="Enter Value..."
        required="required"
        type="text"
        width="50%"
        value={jobType}
        onInputChange={setJobType}
        selectIcon
      />
      <InputField
        name="experience"
        label="Experience"
        placeholder="Enter Value..."
        required="required"
        type="numbers"
        width="50%"
        value={experience}
        onInputChange={setExperience}
        selectIcon
      />
      <InputField
        name="education"
        label="Education"
        placeholder="Enter Value..."
        required="required"
        type="text"
        width="50%"
        value={education}
        onInputChange={setEducation}
        selectIcon
      />
      <InputField
        name="skills"
        label="Skills"
        placeholder="Enter Value..."
        required="required"
        type="text"
        width="100%"
        value={skills}
        onInputChange={setSkills}
        selectIcon
      />
      <InputField
        name="description"
        label="Description"
        placeholder="Write a description"
        required="required"
        width="100%"
        value={description}
        onInputChange={setDescription}
        textarea
      />

      <ChooseFileWrapper>
        <Text>Add If there is any inspiration</Text>
        <Label for="templateFile">
          <CloudUploadIcon style={{ fontSize: "20px" }} />
          <UploadButtonText>GO TO SELECT TEMPLATE</UploadButtonText>
        </Label>
        <input
          style={{ display: "none" }}
          type="file"
          name="templateFile"
          id="templateFile"
          value={templateFile}
          onInputChange={setTemplateFile}
        />
      </ChooseFileWrapper>
    </FormWrap>
  );
};

const FormWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const ChooseFileWrapper = styled.div``;

const Text = styled.p`
  font-size: 9px;
  color: #8c8c8c;
`;

const Label = styled.label`
  padding: 10px 20px;
  border-radius: 3px;
  color: #fff;
  text-align: center;
  background-color: #47cb5d;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UploadButtonText = styled.span`
  font-size: 12px;
  margin-left: 10px;
`;

export default JobInformation;
