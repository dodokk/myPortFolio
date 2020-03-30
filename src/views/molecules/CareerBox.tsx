import React from "react";
import styled from "styled-components";

import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import book from "../../assets/book.svg";

interface Props {
  span: string;
  title: string;
  subtitle: string;
  content: string;
  color: string;
}

const CareerBox: React.FC<Props> = props => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'white', color: '#323232', border: `3px solid ${props.color}`, boxShadow: '5px 5px 10px rgba(0,0,0,0.3)' }}
      contentArrowStyle={{ borderRight: `16px solid ${props.color}` }}
      date={props.span}
      iconStyle={{ background: props.color, color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      icon={<Icon src={book} />}
    >
      <h3 className="vertical-timeline-element-title">{props.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{props.subtitle}</h4>
      <p>
        {props.content}
      </p>
    </VerticalTimelineElement>
  );
};

const Icon = styled.img`
  width: 70%;
  height: 70%;
`

export default CareerBox;