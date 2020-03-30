import React from "react";
import styled from "styled-components";

import { headerHeight } from "../../utils/size";
import src from "../../assets/top.jpg";
import TopContent from "../molecules/TopContent";
import { Element } from "react-scroll";

const Top: React.FC = props => {
  return (
    <Wrapper name="home">
      <TopContent
        title="Welcome"
        text="
        佐藤 更星 のポートフォリオサイトへようこそ。
        "
      />
    </Wrapper>
  );
};

const Wrapper = styled(Element)`
  position: sticky;
  width: 100%;
  height: calc(100vh);
  background-image: url(${src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-blend-mode:lighten;
  :before {
    content: "";
    display: block;
    padding-top: 50%;
  }
`;

export default Top;
