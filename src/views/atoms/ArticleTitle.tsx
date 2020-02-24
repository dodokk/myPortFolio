import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const ArticleTitle: React.FC<Props> = props => {
  return <Wrapper>{props.text}</Wrapper>;
};

const Wrapper = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-family: "Josefin Sans", sans-serif;
`;

export default ArticleTitle;
