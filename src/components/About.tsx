import React from 'react';
import { Card, CardWithLineBreaks } from '../components/Card';
import Image from 'next/image';

const About = () => {
  const personalInfo = {
    name: '吉澤 蓮',
    birthday: '2000年1月15日',
    hometown: '長野県',
    hobbies: '旅行✈️、ドライブ🚕、お酒🍷、etc.'
  };

  const cardsData = [
    {
      title: 'Career Overview',
      description: '某大手プログラミング技術メンター ⇒ CRM/SFA自社SaaSサービス開発⇒ 【現在】SES業務管理自社SaaSサービス開発（22023/11月〜）'
    },
    {
      title: 'Skills',
      description: 'An overview of my technical and soft skills, showcasing my expertise and areas of specialization.'
    },
    {
      title: 'Programming Languages',
      description: 'A list of programming languages I am proficient in, highlighting my experience and projects.'
    },
    {
      title: 'Tools I Use',
      description: 'An insight into the various tools and technologies I utilize in my workflow to enhance productivity and efficiency.'
    },
    {
      title: 'Personal Pitch',
      description: 'My unique selling points and strengths. A personal narrative that defines who I am professionally.'
    },
    {
      title: 'Social Media',
      description: 'Links to my social media profiles, offering a glimpse into my professional network and online presence.'
    }
  ];

  return (
    <div className="grid grid-cols-1 mx-auto my-10 md:grid-cols-3 gap-4 font-alice">
      <div className="flex flex-col ml-20 col-span-1">
        <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
          <Image
            src="/personalIcon.png"
            alt="プロフィール画像"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="mt-4">
          <CardWithLineBreaks
            title={personalInfo.name}
            description={`Birthday: ${personalInfo.birthday}\n Hometown: ${personalInfo.hometown}\n Hobbies: ${personalInfo.hobbies}`}
          />
        </div>
      </div>
      <div className="ml-8 col-span-2 mr-[5px]">
        <div className="grid grid-cols-2 gap-y-16">
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </div >
  );
}

export default About;