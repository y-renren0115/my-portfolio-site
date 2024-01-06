import React from 'react';

const ResumeSection = () => {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-center">Resume</h2>
      <div className="mt-5">
        <div className="resume-item hover:bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-bold">Position or Skill</h3>
          <p>説明や詳細を記入</p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;