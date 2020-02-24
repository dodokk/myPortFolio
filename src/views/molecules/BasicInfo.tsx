import React from "react";
import styled from "styled-components";

import BasicInfoLow from "../atoms/BasicInfoLow";

interface Props {
  name: string;
  university: string;
  address: string;
  birthdate: string;
  github: string;
  company: string;
}

const BasicInfo: React.FC<Props> = props => {
  return (
    <Wrapper>
      <BasicInfoLow title="Name" content={props.name} />
      <BasicInfoLow title="University" content={props.university} />
      <BasicInfoLow title="Address" content={props.address} />
      <BasicInfoLow title="BirthDate" content={props.birthdate} />
      <BasicInfoLow title="Github" content={props.github} />
      <BasicInfoLow title="Company" content={props.company} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100% - 30px * 2);
  height: calc(40% - 30px * 2);
  padding: 30px;
  background-color: #323232;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default BasicInfo;
