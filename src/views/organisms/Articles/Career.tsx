import React from "react";
import styled from "styled-components";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import ArticleWrapper from "../../molecules/ArticleWrapper";
import CareerBox from "../../molecules/CareerBox";


const getCareer = () => {
  return [
    {span: "2012/3", title: "札幌市立澄川中学校 卒業", subtitle: "普通科", content: "野球部に所属。ポジションはセンターであり、バッティングには自信があった。", color: "gray"},
    {span: "2015/3", title: "北海道札幌南高等学校 卒業", subtitle: "普通科", content: "剣道部に所属。守破離をモットーに活動。先鋒を務めることが多かった。", color: "gray"},
    {span: "2017/4", title: "横浜国立大学 入学", subtitle: "理工学部 数物･電子情報系学科 電子情報システムEP", content: "スキューバダイビングサークルBlueMarlinに所属。特別な役職ではなかったが、少人数のサークルのため、いくつかの催事でリーダーを務めた。掛け替えのない仲間たちとの出会いであった。", color: "green"},
    {span: "2019/4", title: "プログラミングスクール 入学", subtitle: ".Pro [pythonコース]", content: "費用を全て自費で負担。プログラミングに対して腹を括った日である。入校するのに即日発行のクレジットカードを作り、合計3枚のクレジットカードを18分割したのは良い思い出である。", color: "blue"},
    {span: "2019/8", title: "長期インターン 開始", subtitle: "IntelligenceDesign株式会社", content: "チーム開発や実務の厳しさを知る。と同時にプロジェクトに対する心構えを持つ。個人開発では恐らく考えもしなかったことをたくさん学ぶことができたと実感。特にAWSとの出会いは将来を左右すると感じた。", color: "blue"},
    {span: "2019/10", title: "プログラミングスクール 卒業", subtitle: ".Pro [pythonコース]", content: "知識だけでなく自走力を身につけたと実感。教えられたものを効率よく飲み込むことにプラスして、自ら知識を得る工夫を学ぶことができた。半年間でしたが、ありがとうございました。", color: "blue"},
    {span: "2019/11", title: "プログラミング講師 アルバイト開始", subtitle: ".Pro [pythonコース]", content: "学習姿勢や知識のアウトプット力を買われ、今度は講師として.Proへ。生徒の頃とは異なり、教えると言うことの難しさを痛感。他人の分からないを理解する経験を通じて、自分の分からないを上手に相手に伝える能力も向上した。", color: "blue"},
    {span: "2021/3", title: "横浜国立大学 卒業見込", subtitle: "理工学部 数物･電子情報系学科 電子情報システムEP", content: "卒業に必要な単位は習得済み。大学院へは今のところ行く予定なし。", color: "green"},
  ]
};

const Career: React.FC = props => {
  const careers = getCareer();
  return (
    <ArticleWrapper title="Career" name="career">
      <CareerWrapper>
        <VerticalTimeline>
          {
            careers.map((career, index) =>
              <CareerBox 
                key={index}
                span={career.span}
                title={career.title}
                subtitle={career.subtitle}
                content={career.content}
                color={career.color}
              />
            )
          }
        </VerticalTimeline>
      </CareerWrapper>
    </ArticleWrapper>
  );
};

const CareerWrapper = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 100%;
`


export default Career;
