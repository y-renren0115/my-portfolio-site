import React from 'react';

type CardProps = {
  title: string;
  description: string;
  // その他のプロパティもここに追加できます。
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {description}
      </p>
      {/* ここにカードの内容を追加 */}
    </div>
  );
};

export default Card;