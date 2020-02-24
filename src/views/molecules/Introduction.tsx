import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  text: string;
}

const TopContent: React.FC<Props> = props => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100% - 30px * 2);
  height: calc(60% - 20px * 2);
  padding: 20px 30px;
  background-color: #f9f9f9;
`;

const Title = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
  letter-spacing: 4px;
`;

const Text = styled.div`
  color: #7d7d7d;
  font-size: 13px;
  line-height: 2;
`;

export default TopContent;
