import React from 'react';
import { Card, CardWithLineBreaks } from '../components/Card';
import Image from 'next/image';


const About = () => {
  const personalInfo = {
    name: 'John Doe',
    birthday: 'January 1, 1990',
    hometown: 'New York',
    hobbies: 'Photography and Traveling'
  };

  const cardsData = [
    {
      title: 'Career Overview',
      description: 'A brief summary of my professional journey and key milestones. Exploring the path that has shaped my career.'
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col my-8 ml-20 col-span-1">
        <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
          <Image
            src="/personIcon1.png"
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
      <div className="my-8 ml-8 col-span-2">
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