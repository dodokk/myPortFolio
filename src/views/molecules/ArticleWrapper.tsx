import React from "react";
import { Element as OriginalElement } from "react-scroll";
import styled from "styled-components";

import ArticleTitle from "../atoms/ArticleTitle";

interface Props {
  name: string;
  title: string;
}

const ArticleWrapper: React.FC<Props> = props => {
  return (
    <Element name={props.name}>
      <ArticleTitle text={props.title} />
      {props.children}
    </Element>
  );
};

const Element = styled(OriginalElement)`
  margin: 80px 30px;
  width: calc(100% - 30px * 2);
`;

export default ArticleWrapper;
