import React from "react";
import styled from "styled-components";

import ArticleWrapper from "../../molecules/ArticleWrapper";
import Selfy from "../../molecules/Selfy";
import BasicInfo from "../../molecules/BasicInfo";
import Introduction from "../../molecules/Introduction";
import src from "../../../assets/selfy.jpg";

const AboutMe: React.FC = props => {
  return (
    <ArticleWrapper title="AboutMe" name="aboutme">
      <DividePanel>
        <Half>
          <Selfy src={src} name="kosei.sato" description="it engineer" />
        </Half>
        <Half>
          <Introduction
            title="Vision for the Future"
            text="テストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストです"
          />
          <BasicInfo
            name="佐藤 更星 (さとう こうせい)"
            university="横浜国立大学理工学部３年生"
            address="神奈川県相模原市"
            birthdate="1996年10月24日"
            email="kou10sei24@yahoo.co.jp"
            github="https://github.com/dodokk"
            twitter="https://twitter.com/PyDkk"
            company="https://i-d.ai (internship)"
          />
        </Half>
      </DividePanel>
    </ArticleWrapper>
  );
};

const DividePanel = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const Half = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default AboutMe;
