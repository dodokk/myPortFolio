import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  content: string;
}

const ArticleTitle: React.FC<Props> = props => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>: {props.content}
    </Wrapper>
  );
};

const Title = styled.div`
  display: inline-block;
  width: 100px;
  font-weight: bold;
  font-size: 13px;
`;

const Wrapper = styled.div`
  width: 100%;
  color: #ebebeb;
  font-size: 13px;
`;

export default ArticleTitle;
