import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { sampleSelector } from "../../redux/selectors/sampleSelector";
import sampleModule from "../../redux/modules/sampleModule";

import Header from "../organisms/Header";
import Top from "../organisms/Top";
import { AboutMe, Career, Skills, Works, Contact } from "../organisms/Articles";
import Footer from "../organisms/Footer";

const getLabels = () => [
  { text: "Home", id: "home" },
  { text: "AboutMe", id: "aboutme" },
  { text: "Career", id: "career" },
  { text: "Skills", id: "skills" },
  { text: "Works", id: "works" },
  // { text: "Contact", id: "contact" }
];

const Home: React.FC = props => {
  // dispatch, state を用意
  const dispatch = useDispatch();
  const sampleState = useSelector(sampleSelector);
  const labels = getLabels();

  return (
    <Wrapper>
      <Top />
      <Header labels={labels} />
      <AboutMe />
      <Career />
      <Skills />
      <Works />
      {/* <Contact /> */}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-width: 1000px;
`;

export default Home;
