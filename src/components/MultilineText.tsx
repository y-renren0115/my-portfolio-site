import React from 'react';

type MultilineTextProps = {
  text: string;
};

const MultilineText: React.FC<MultilineTextProps> = ({ text }) => {
  const lines = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== text.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));

  return <div>{lines}</div>;
};

// const MultilineText: React.FC<MultilineTextProps> = ({ text }) => {
//   const paragraphs = text.split('\n').map((line, index) => (
//     <p key={index}>{line}</p>
//   ));

//   return <div>{paragraphs}</div>;
// };

export default MultilineText;