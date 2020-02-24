import React from "react";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

import HeaderLogo from "../atoms/HeaderLogo";
import HeaderMenu from "../molecules/HeaderMenu";
import { headerHeight } from "../../utils/size";
import { Label } from "../../utils/types";
import src from "../../assets/logo.png";

interface Props {
  labels: Label[];
}

const Header: React.FC<Props> = props => {
  const _handleLogoClick = () => {
    scroll.scrollToTop();
  };

  return (
    <Wrapper>
      <HeaderLogo src={src} onClick={_handleLogoClick} />
      <HeaderMenu labels={props.labels} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  height: ${headerHeight};
  width: calc(100% - 20px * 2);
  background-color: white;
`;

export default Header;
