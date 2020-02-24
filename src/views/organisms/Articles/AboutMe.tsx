import React from "react";
import styled from "styled-components";

import ArticleWrapper from "../../molecules/ArticleWrapper";
import Selfy from "../../molecules/Selfy";
import BasicInfo from "../../molecules/BasicInfo";
import Introduction from "../../molecules/Introduction";
import src from "../../../assets/selfy.jpg";

const AboutMe: React.FC = props => {
  return (
    <ArticleWrapper title="AboutMe" name="aboutme">
      <DividePanel>
        <Half>
          <Selfy src={src} name="kosei.sato" description="it engineer" />
        </Half>
        <Half>
          <Introduction
            title="自己紹介"
            text="
            この度は本サイトをご覧いただき誠にありがとうございます。佐藤更星です。現在私は就職活動の真っ最中で、主にIT業界を受けて回っております。
            エンジニア志望であり、長期インターンやプログラミングスクールでの講師経験をもとに社会人として最高のスタートダッシュを切れるように日々精進しております。
            ビジネスサイドに精通したエンジニアになりたいと思っており、ゴリゴリとコードを書くだけでなく、プロジェクトをマネジメントしたり、お客様に提案する立場になりたいと思っています。
            チャレンジングな課題なほど燃えるタイプであり、必要であればどんなものもキャッチアップし、今までの経験とマージする事で新たなソリューションを生み出していきたいと思っています。
            ちなみに休日の趣味はスキューバダイビングと食べ物目当ての旅行です。よろしくお願いします。
            "
          />
          <BasicInfo
            name="佐藤 更星 (さとう こうせい)"
            university="横浜国立大学理工学部３年生"
            address="神奈川県相模原市"
            birthdate="1996年10月24日"
            github="https://github.com/dodokk"
            company="https://i-d.ai (internship)"
          />
        </Half>
      </DividePanel>
    </ArticleWrapper>
  );
};

const DividePanel = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const Half = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default AboutMe;
