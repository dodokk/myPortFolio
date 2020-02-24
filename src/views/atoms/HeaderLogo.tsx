import React from "react";
import styled from "styled-components";

import { headerHeight } from "../../utils/size";

interface Props {
  src: string;
  onClick: () => void;
}

const HeaderLogo: React.FC<Props> = props => {
  return (
    <Wrapper onClick={props.onClick}>
      <img src={props.src} height={headerHeight} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
`;

export default HeaderLogo;
