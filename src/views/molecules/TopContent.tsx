import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  text: string;
}

const TopContent: React.FC<Props> = props => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 650px;
  padding: 60px;
  background-color: rgba(255, 255, 255, 0.7);
  border-right: solid 6px green;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.6);
`;

const InnerWrapper = styled.div``;

const Text = styled.p`
  font-family: "Lora", serif;
  margin-bottom: 0;
  font-size: 24px;
`;
const Title = styled.div`
  color: #323232;
  margin-top: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 100px;
  letter-spacing: 8px;
  text-transform: upper-cate;
`;

export default TopContent;
