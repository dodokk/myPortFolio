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
  width: calc(100% - 40px * 2);
  height: 70%;
  padding: 40px;
`;

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 40px;
  letter-spacing: 4px;
`;

const Text = styled.div`
  color: #7d7d7d;
`;

export default TopContent;
