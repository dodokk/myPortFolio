import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import HeaderItem from "../atoms/HeaderItem";
import { Label } from "../../utils/types";

interface Props {
  labels: Label[];
}

const HeaderMenu: React.FC<Props> = props => {
  return (
    <Wrapper>
      {props.labels.map((label, index) => (
        <HeaderItem text={label.text} to={label.id} key={index} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default HeaderMenu;
