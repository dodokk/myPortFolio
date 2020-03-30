import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const ArticleTitle: React.FC<Props> = props => {
  return <Wrapper>{props.text}</Wrapper>;
};

const Wrapper = styled.h3`
  width: 90%;
  margin: 100px auto;
  text-align: center;
  font-size: 46px;
  font-family: "Josefin Sans", sans-serif;
  color: #666;
`;

export default ArticleTitle;
