import { Card } from '../components/Card';

const Works = () => {
  const cardsData = [
    {
      title: 'Project Management Expertise',
      description: 'Managed various web development projects, ensuring timely delivery and adherence to quality standards. Skilled in Agile methodologies and team collaboration.'
    },
    {
      title: 'Frontend Development Specialist',
      description: 'Experienced in building responsive and interactive web interfaces using HTML5, CSS3, and JavaScript frameworks like React.js and Angular.'
    },
    {
      title: 'Backend Development Skills',
      description: 'Proficient in server-side languages such as Node.js and Python, with a strong understanding of database technologies like SQL and NoSQL.'
    },
    {
      title: 'Database Design & Management',
      description: 'Expertise in designing robust database architectures and optimizing data storage and retrieval for high-performance web applications.'
    },
    {
      title: 'API Development & Integration',
      description: 'Developed custom APIs and integrated third-party APIs to enhance application functionality and user experience.'
    },
    {
      title: 'User Experience & Interface Design',
      description: 'Focused on creating user-centered designs and improving web application usability through innovative UI solutions and UX best practices.'
    }
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
}

export default Works;