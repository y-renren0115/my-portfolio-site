import React from 'react';

const ResumeSection = () => {
  // 履歴書のデータをここに配置するか、外部から取得する

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-center">Resume</h2>
      <div className="mt-5">
        {/* 履歴書の各セクションをここに表示 */}
        <div className="resume-item hover:bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-bold">Position or Skill</h3>
          <p>説明や詳細...</p>
          {/* さらに詳細な情報やプロジェクトリンクを追加可能 */}
        </div>
        {/* 他の履歴書項目を追加 */}
      </div>
    </section>
  );
};

export default ResumeSection;