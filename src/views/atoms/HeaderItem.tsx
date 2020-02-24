import React from "react";
import { Link as OriginalLink } from "react-scroll";
import styled from "styled-components";

import { headerHeightNum } from "../../utils/size";

interface Props {
  to: string;
  text: string;
}

const HeaderItem: React.FC<Props> = props => {
  return (
    <Wrapper>
      <Link
        activeClass="active"
        to={props.to}
        spy={true}
        smooth={true}
        offset={-headerHeightNum}
        duration={1000}
      >
        {props.text}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0px 10px;
  cursor: pointer;
  transition: border-bottom 500ms ease 0ms;
  border-bottom: solid 2px white;
  &:hover {
    border-bottom: solid 2px green;
  }；
`;

const Link = styled(OriginalLink)`
  transition: color 500ms ease 0ms, border-bottom 500ms ease 0ms;
  color: gray;
  border-bottom: solid 2px white;
  &.active {
    color: black;
    border-bottom: solid 2px green;
  }
`;

export default HeaderItem;
