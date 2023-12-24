import React from 'react';

type CardProps = {
  title: string;
  description: string;
};

type CardWithLineBreaksProps = {
  title: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {description}
      </p>
    </div>
  );
};

export const CardWithLineBreaks: React.FC<CardWithLineBreaksProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-3">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}