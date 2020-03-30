import React from "react";
import styled from "styled-components";

interface Props {
  src: string;
  name: string;
  level: number;
};

const SkillPanel: React.FC<Props> = props => {
  return (
    <Wrapper>
      <ImgDiv src={props.src}>
        <Content>
          <div>{props.name}</div>
          <div>習得レベル: {props.level}</div>
        </Content>
      </ImgDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px;
  width: 180px;
  height: 180px;
  border: solid 1px silver;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgba(255,255,255,1);
`;

const ImgDiv = styled.div<{src: string}>`
  width: 70%;
  height: 70%;
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color:rgba(255,255,255,0);
  background-blend-mode:lighten;
  transition: background-color .2s;
  :hover{
    background-color:rgba(255,255,255,0.5);
  };
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  :hover{
    opacity: 1;
  }
`


export default SkillPanel;
