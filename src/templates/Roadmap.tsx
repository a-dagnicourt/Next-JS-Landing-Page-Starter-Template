import { Chrono } from 'react-chrono';

const Roadmap = () => {
  const items = [
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
  ];

  return (
    <section
      id="roadmap"
      className="flex flex-col items-center bg-gray-700 mx-auto px-3 py-6 h-screen"
    >
      <h2 className="text-6xl text-left">Roadmap</h2>
      <div style={{ width: '1000px', height: '1200px' }}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" />
      </div>
    </section>
  );
};

export { Roadmap };
