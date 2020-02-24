import React from "react";
import styled from "styled-components";

import { headerHeight } from "../../utils/size";
import src from "../../assets/top.jpg";
import TopContent from "../molecules/TopContent";

const Top: React.FC = props => {
  return (
    <Wrapper>
      <TopContent
        title="DOKKOI."
        text="
        This is the portfolio site of dokkoi.
        Please see my history or abilities.
        "
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${headerHeight});
  background-image: url(${src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  :before {
    content: "";
    display: block;
    padding-top: 50%;
  }
`;

export default Top;
