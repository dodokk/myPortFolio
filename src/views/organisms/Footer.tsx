import React from "react";
import styled from "styled-components";

const Footer: React.FC = props => {
  return (
    <Wrapper>
      <Content>Thank you for reading!</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 200px;
  widht: 100%;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Content = styled.div``

export default Footer;
