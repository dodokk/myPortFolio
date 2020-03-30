import React, { useState } from "react";
import styled from "styled-components";
import OriginalModal from 'react-modal';
 

interface Props {
  src: string;
  title: string;
  span: string;
  member: number;
  role: string;
  description: string;
};

const WorkPanel: React.FC<Props> = props => {
  const [isOpen, setIsOpen] = useState(false)
  
  const _handleClick = () => {
    setIsOpen(true);
  }
  const _handleClose = () => {
    setIsOpen(false);
  }

  return (
    <>
    <Wrapper onClick={_handleClick}>
      <ImgDiv src={props.src}>
        <Content>
          <div>Click here!</div>
        </Content>
      </ImgDiv>
    </Wrapper>
    <Modal
      isOpen={isOpen}
      onRequestClose={_handleClose}
    >
      <Title>アーキテクチャ図</Title>
      <Img src={props.src} />
      <Title>プロジェクト詳細</Title>
      <DetailWrapper>
        <Pjcontent>・プロジェクト名：{props.title}</Pjcontent>
        <Pjcontent>・開発期間：{props.span}</Pjcontent>
        <Pjcontent>・開発メンバー：{props.member}人</Pjcontent>
        <Pjcontent>・チームでの役割：{props.role}</Pjcontent>
        <Pjcontent>・備考：{props.description}</Pjcontent>
      </DetailWrapper>
    </Modal>
    </>
  );
};

const Wrapper = styled.div`
  width: 30vw;
  height: 17vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgba(255,255,255,1);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  margin: 20px;
  cursor: pointer;
`;

const ImgDiv = styled.div<{src: string}>`
  width: 90%;
  height: 90%;
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: rgba(255,255,255,0);
  background-blend-mode:lighten;
  transition: background-color .2s;
  :hover{
    background-color:rgba(255,255,255,0.5);
  };
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  :hover{
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 90%;
  margin: 40px 5%;
  border: solid 2px #ddd;
`;

const Modal = styled(OriginalModal)`
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  border: solid 1px #999;
  outline: none;
  width: 80vw;
  height: 70vh;
  padding: 20px;
  overflow-y: scroll;
  z-index: 20;
`;

const Title = styled.div`
  border-left: solid 8px green;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 8px;
  color: #666;
  padding-left: 20px
`;

const DetailWrapper = styled.div`
  margin: 40px;
`;

const Pjcontent = styled.div`
  font-size: 20px;
  color: #333;
  line-height: 3;
`;

export default WorkPanel;
