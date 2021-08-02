import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import JobInformation from "./components/JobInformation";
import CandidateType from "./components/CandidateType";
import ApplicationData from "./components/ApplicationData";

const App = () => {
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [templateFile, setTemplateFile] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [careerLevel, setCareerLevel] = useState("");
  const [gender, setGender] = useState("");
  const [equipmentSpecification, setEquipmentSpecification] = useState("");
  const [step, setStep] = useState(0);

  const renderSwitch = (stepNumber) => {
    switch (stepNumber) {
      case 0:
        return (
          <JobInformation
            jobType={jobType}
            setJobType={setJobType}
            experience={experience}
            setExperience={setExperience}
            education={education}
            setEducation={setEducation}
            skills={skills}
            setSkills={setSkills}
            description={description}
            setDescription={setDescription}
            templateFile={templateFile}
            setTemplateFile={setTemplateFile}
          />
        );
      case 1:
        return (
          <CandidateType
            hourlyRate={hourlyRate}
            setHourlyRate={setHourlyRate}
            startDate={startDate}
            setStartDate={setStartDate}
            careerLevel={careerLevel}
            setCareerLevel={setCareerLevel}
            gender={gender}
            setGender={setGender}
            equipmentSpecification={equipmentSpecification}
            setEquipmentSpecification={setEquipmentSpecification}
          />
        );
      case 2:
        return (
          <ApplicationData
            jobType={jobType}
            experience={experience}
            education={education}
            skills={skills}
            description={description}
            templateFile={templateFile}
            hourlyRate={hourlyRate}
            startDate={startDate}
            careerLevel={careerLevel}
            gender={gender}
            equipmentSpecification={equipmentSpecification}
          />
        );
      default:
        return;
    }
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    if (step === 0) {
      if (
        jobType !== "" &&
        experience !== "" &&
        education !== "" &&
        skills !== "" &&
        description !== ""
      ) {
        setStep(step + 1);
      } else {
        document.getElementById("ErrorMessage").style.display = "block";
      }
    } else if (step === 1) {
      if (
        hourlyRate !== "" &&
        startDate !== "" &&
        careerLevel !== "" &&
        gender !== "" &&
        equipmentSpecification !== ""
      ) {
        setStep(step + 1);
      } else {
        document.getElementById("ErrorMessage").style.display = "block";
      }
    }
  };

  return (
    <div className="App">
      <ContentWrapper>
        <Card>
          {/* Form Header */}
          <CardHeader>
            <Heading>CREATE A JOB POST</Heading>
            <Paragraph>
              Complete the following steps to create an effective job post
            </Paragraph>
            <Hr></Hr>
            <StepsGroup>
              <StepIndication>Step {step + 1} of 3</StepIndication>
              <StepsWrapper>
                <Step className="active">Job Information</Step>
                <Step className={step > 0 ? "active" : ""}>Candidate Type</Step>
                <Step className={step > 1 ? "active" : ""}>
                  Application Results
                </Step>
              </StepsWrapper>
            </StepsGroup>
          </CardHeader>

          {/* Form Content */}
          <CardContent>{renderSwitch(step)}</CardContent>

          <ErrorMessage id="ErrorMessage">
            Please Fill out All the Fields
          </ErrorMessage>
          {/* Form Footer */}
          {step !== 2 ? (
            <CardFooter>
              {step !== 0 ? (
                <Button className="previous" onClick={previousStep}>
                  Previous
                </Button>
              ) : (
                ""
              )}
              <Button className="next" onClick={nextStep}>
                Next
              </Button>
            </CardFooter>
          ) : (
            ""
          )}
        </Card>
      </ContentWrapper>
    </div>
  );
};

const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-color: #f1f1f1;
`;

const Card = styled.div`
  width: 700px;
  margin: 50px auto;
  text-align: left;
  background-color: #fff;
  border-radius: 10px;
`;

const CardHeader = styled.div`
  padding: 20px;
`;

const Hr = styled.hr`
  border: none;
  border-bottom: 1px solid #dee2e6 !important;
  height: 1px;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 26px;
  font-weight: 300;
  color: #006ab3;
`;

const Paragraph = styled.p`
  font-size: 12px;
  color: #212529;
`;

const StepsGroup = styled.div``;

const StepIndication = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #006bb3;
`;

const StepsWrapper = styled.div`
  display: flex;
  background-color: #dee2e6;
`;

const Step = styled.div`
  width: calc(100% / 3);
  padding: 15px 0px;
  text-align: center;
  background-color: #dee2e6;
  color: #495057;
  font-size: 13px;
  border-right: 1px solid #c6c3c3;

  &:last-child {
    border-right: 0px;
  }
  &.active {
    background-color: #006bb3;
    color: #fff;
    border-right: 0px !important;
  }

  /* &.active:last-child {
    border-radius: 0px 30px 30px 0px;
  } */
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardFooter = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 12px 20px;
  width: 220px;
  text-align: center;
  color: #8c8c8c;
  border: 1px solid transparent;
  background-color: transparent;
  font-size: 13px;
  cursor: pointer;
  border-radius: 4px;

  &.previous {
    border-color: #8c8c8c;
  }
  &.next {
    border-color: #006bb3;
    background: #006bb3;
    color: #fff;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 16px;
  font-weight: 500;
  display: none;
  margin-left: 20px;
`;

export default App;
