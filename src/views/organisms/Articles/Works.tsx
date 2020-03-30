import React from "react";
import styled from "styled-components";

import ArticleWrapper from "../../molecules/ArticleWrapper";
import WorkPanel from "../../molecules/WorkPanel";

import arch1 from "../../../assets/arch1.jpg";
import arch2 from "../../../assets/arch2.jpg";
import arch3 from "../../../assets/arch3.jpg";
import arch4 from "../../../assets/arch4.jpg";
import arch5 from "../../../assets/arch5.jpg";


const getWorks = () => {
  return [
    {src: arch1, title:"dokkoi.dev(このサイト)", span: "2019/12/20 - now", member: 1, role: "全部", description:"名刺に独自ドメインのポートフォリオサイトを書きたくて開発開始。しかしデザインセンスが壊滅的なため、試行錯誤しまくっているうちに時間を浪費しがち。モックアップをちゃんと作るべきだったと後悔。"},
    {src: arch2, title:"BlueMarlinHP", span: "2020/3/18 - 2020/4/7", member: 5, role: "PM", description:"サークルのHPをサークルメンバーで作成。自分はAWS上にホスティングこそしたものの、基本的には開発基板の作成や進捗の管理のみを担当し、メンバーのサポートに徹した。講師経験と実務経験のアウトプットの良い機会だと感じた。"},
    {src: arch3, title:"某プロジェクト", span: "2020/3/24 - 2020/4/10", member: 4, role: "PL", description:"IntelligenceDesign株式会社で制作(長期インターン)。xlsxファイルとcsvファイルを入力とし、s3に元データを保存しつつそれらの情報をdbに保存するシステム。今までdbにあまり触れてこなかったため、今回行ったdb設計はかなり良い経験だと感じた。"},
    {src: arch4, title:"某プロジェクト", span: "2019/8/7 - 2020/9/1, 2020/2/13 - 2020/3/6", member: 4, role: "(メンバー)→PL", description:"IntelligenceDesign株式会社で制作(長期インターン)。ある画像をAPIで処理し、それらの結果をリアルタイムで表示させ続けるシステム。amplifyのドキュメントの少なさと、websocketへの理解の浅さから、苦労した。"},
    {src: arch5, title:"某プロジェクト", span: "2020/1/6 - 2020/2/17, 2020/3/6 - 2020/3/19", member: 4, role: "PL", description:"IntelligenceDesign株式会社で制作(長期インターン)。機械学習インスタンスをクラアントごとに作り、学習したり推論したりできるサービス。ほぼ同じ設定をクライアントごとに適用するので、CloudFormationの偉大さが身に染みた。また、アーキテクチャ図には反映できていないが、backupやsnsを使用し、監視や定期バックアップといった運用周りも実装した。さらに、他の人をハンドリングする初めての経験であり、よりプロジェクト全体を見る目が養われたと感じた。"},
  ]
};

const Works: React.FC = props => {
  const works = getWorks();
  return (
    <ArticleWrapper title="Works" name="works">
      <SubDoc>今までに参画したプロジェクトを、言える範囲で紹介したいと思います。</SubDoc>
      <SubDoc>クリックするとモーダルが開かれる仕様となっております。</SubDoc>
      <SubDoc>ここで紹介するアーキテクチャ、およびそれぞれのAWSサービスは、アドバイスを受けながら制作したものを含みます。</SubDoc>
      <WorkWrapper>
        {
          works.map((work, index) =>
            <WorkPanel 
              key={index}
              src={work.src}
              title={work.title}
              span={work.span}
              member={work.member}
              role={work.role}
              description={work.description}
            />
          )
        }
      </WorkWrapper>
    </ArticleWrapper>
  );
};

const WorkWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  width: 100%;
`;

const SubDoc = styled.div`
  color: #666;
  font-size: 14px;
  text-align: center;
`;


export default Works;
