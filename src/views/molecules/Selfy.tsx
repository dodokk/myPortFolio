import React from "react";
import styled from "styled-components";

interface Props {
  src: string;
  name: string;
  description: string;
}

const TopContent: React.FC<Props> = props => {
  return (
    <Wrapper src={props.src}>
      <InnerWrapper>
        <Description>
          <Title>{props.name}</Title>
          <Text>{props.description}</Text>
        </Description>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ src: string }>`
  width: 100%;
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: rgba(255, 255, 255, 0.6);
  :before {
    content: "";
    display: block;
    padding-top: 133%;
  }
`;

const Description = styled.div`
  padding: 40px;
`;

const Text = styled.div`
  font-family: Georgia;
  font-size: 16px;
  text-align: right;
  margin: 10px 0px;
  letter-spacing: 4px;
  text-transform: uppercase;
`;
const Title = styled.h3`
  margin: 0;
  font-family: Open Sans;
  font-weight: 700;
  font-size: 45px;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export default TopContent;
