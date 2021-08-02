import React from "react";
import styled from "styled-components";

const ApplicationData = ({
  jobType,
  experience,
  education,
  skills,
  description,
  templateFile,
  hourlyRate,
  startDate,
  careerLevel,
  gender,
  equipmentSpecification,
}) => {
  return (
    <Content>
      <Heading>Application Data</Heading>
      <Text>Job Type : {jobType}</Text>
      <Text>Experience : {experience}</Text>
      <Text>Education : {education}</Text>
      <Text>Skills : {skills}</Text>
      <Text>Description : {description}</Text>
      <Text>Template : {templateFile}</Text>
      <Text>Hourly Rate : {hourlyRate}</Text>
      <Text>Start Date : {startDate}</Text>
      <Text>Career Level : {careerLevel}</Text>
      <Text>Gender : {gender}</Text>
      <Text>Equipment Specification : {equipmentSpecification}</Text>
    </Content>
  );
};

const Content = styled.div``;

const Text = styled.p``;

const Heading = styled.h2``;

export default ApplicationData;
