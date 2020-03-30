import React from "react";
import styled from "styled-components";

import ArticleWrapper from "../../molecules/ArticleWrapper";
import SkillPanel from "../../molecules/SkillPanel";

import docker from "../../../assets/docker-icon.svg";
import ts from "../../../assets/typescript-icon.svg";
import js from "../../../assets/javascript.svg";
import blueprint from "../../../assets/blueprint.svg";
import bootstrap from "../../../assets/bootstrap.svg";
import electron from "../../../assets/electron.svg";
import flask from "../../../assets/flask.svg";
import kotlin from "../../../assets/kotlin.svg";
import materialui from "../../../assets/material-ui.svg";
import nextjs from "../../../assets/nextjs.svg";
import python from "../../../assets/python.svg";
import pytorch from "../../../assets/pytorch.svg";
import react from "../../../assets/react.svg";
import redux from "../../../assets/redux.svg";
import spring from "../../../assets/spring.svg";
import html from "../../../assets/html-5.svg";
import css from "../../../assets/css-3.svg";
import aws from "../../../assets/aws.svg";
import drawio from "../../../assets/drawio.svg";
import gsheets from "../../../assets/g-sheets.svg";
import gslides from "../../../assets/g-slides.svg";


const getSkills = () => {
  return [
    { src: html, name: "HTML", level: 3 },
    { src: css, name: "CSS", level: 2 },
    { src: materialui, name: "Material-ui", level: 1 },
    { src: blueprint, name: "Blueprintjs", level: 2 },
    { src: bootstrap, name: "Bootstrap", level: 2 },
    { src: js, name: "JavaScript", level: 3 },
    { src: ts, name: "TypeScript", level: 3 },
    { src: react, name: "React", level: 3 },
    { src: redux, name: "Redux", level: 2 },
    { src: nextjs, name: "Nextjs", level: 1 },
    { src: electron, name: "Electron", level: 3 },
    { src: python, name: "Python", level: 2 },
    { src: pytorch, name: "PyTorch", level: 1 },
    { src: flask, name: "Flask", level: 2 },
    { src: kotlin, name: "Kotlin", level: 1 },
    { src: spring, name: "Spring", level: 1 },
    { src: docker, name: "Docker", level: 2 },
    { src: aws, name: "AWS", level: 2 },
    { src: drawio, name: "Draw.io", level: 2 },
    { src: gsheets, name: "Google Spread Sheets", level: 2 },
    { src: gslides, name: "Google Slides", level: 2 },
  ]
}

const Skills: React.FC = props => {
  const skills = getSkills();
  return (
    <ArticleWrapper title="Skills" name="skills">
      <SubDoc>今まで、実際になんらかのプロジェクトで使用したことのあるスキルを列挙致します。</SubDoc>
      <SubDoc>マウスホバーすることで詳細が見られるようになっています。</SubDoc>
      <SubDoc>「習得レベル」と記載があるものは、IPAが公表するITスキル標準の定義に基づき、自己判断でつけたものです。</SubDoc>
      <SkillWrapper>
        {
          skills.map((skill, index) =>
            <SkillPanel 
              key={index}
              src={skill.src}
              name={skill.name}
              level={skill.level}
            />
          )
        }
      </SkillWrapper>
    </ArticleWrapper>
  );
};

const SkillWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  width: 100%;
`;

const SubDoc = styled.div`
  color: #666;
  font-size: 14px;
  text-align: center;
`;

export default Skills;
