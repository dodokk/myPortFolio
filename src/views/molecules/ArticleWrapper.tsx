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
  margin: 40px 0px;
  width: calc(100% - 0px * 2);
  min-width: 1000px;
`;

export default ArticleWrapper;
