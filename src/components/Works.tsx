import { Card } from '../components/Card';
import ResumeSection from './ResumeSection';

const Works = () => {
  const cardsData = [
    {
      title: 'Card Title 1',
      description: 'This is the card description.'
    },
    {
      title: 'Card Title 2',
      description: 'This is another card description.'
    },
    {
      title: 'Card Title 3',
      description: 'Yet another card description.'
    },
    {
      title: 'Card Title 4',
      description: 'Yet another card description.'
    },
    {
      title: 'Card Title 5',
      description: 'Yet another card description.'
    },
    {
      title: 'Card Title 6',
      description: 'Yet another card description.'
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
      <ResumeSection />
    </>
  );
}

export default Works;