import { Card } from "../components/Card";

const Works = () => {
  const cardsData = [
    {
      title: "フロントエンド開発",
      description:
        "HTML5/CSS3/TailwindCSS/JavaScript/\nTypeScript/Vue.js/React.js/Next.js等を使用したSPA開発やレスポンシブでインタラクティブなWebインターフェースの構築経験",
    },
    {
      title: "バックエンド開発",
      description:
        "Ruby/Ruby on Rails/Java/Spring BootなどのMVCアーキテクチャベースのバックエンド技術を使用した効率的かつセキュアでスケーラブルなバックエンドシステムの開発経験",
    },
    {
      title: "クラウドサービス連携",
      description:
        "EC2を使用したWebアプリケーショに最適で柔軟なサーバー環境の構築、S3を使用したデータストレージと配信の管理、Lambdaを使用したサーバーレス処理の開発経験",
    },
    {
      title: "データベース管理",
      description:
        "MySQL、PostgreSQL、SQLServer等を使用した多様な機能要件に合わせたDB設計、リレーショナルデータベースの特性を活かした最適なデータ構造と性能を実現した経験",
    },
    {
      title: "UI/UXデザイン構築",
      description:
        "FigmaやAIデザインツール活用した、インタラクティブなプロトタイプの作成および一貫性のあるデザインシステムを構築、多様なユーザーが使いやすいUIを意識した設計経験",
    },
    {
      title: "アジャイル開発プロセス",
      description:
        "5人の開発チームのプロジェクトリーダーとして、スクラム手法を採用して迅速なイテレーションと継続的なフィードバックを実施し、柔軟な要件変更に迅速に対応したプロジェクト経験",
    },
  ];

  return (
    <>
      <div className="mx-auto my-10 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-20 gap-y-24 font-alice">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
        <div />
      </div>
    </>
  );
};

export default Works;
