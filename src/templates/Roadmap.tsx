import { Chrono } from 'react-chrono';

const Roadmap = () => {
  const items = [
    {
      title: 'March 2022',
      cardTitle: 'Lorem Ipsum',
      url: 'http://beastfightclub.com',
      cardSubtitle: 'Lorem ipsum dolor',
      cardDetailedText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officia sapiente aliquid saepe ipsa suscipit possimus cum, recusandae accusantium nisi.',
    },
    {
      title: 'April 2022',
      cardTitle: 'Lorem Ipsum',
      url: 'http://beastfightclub.com',
      cardSubtitle: 'Lorem ipsum dolor',
      cardDetailedText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officia sapiente aliquid saepe ipsa suscipit possimus cum, recusandae accusantium nisi.',
    },
    {
      title: 'June 2022',
      cardTitle: 'Lorem Ipsum',
      url: 'http://beastfightclub.com',
      cardSubtitle: 'Lorem ipsum dolor',
      cardDetailedText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officia sapiente aliquid saepe ipsa suscipit possimus cum, recusandae accusantium nisi.',
    },
    {
      title: 'Q3 2022',
      cardTitle: 'Lorem Ipsum',
      url: 'http://beastfightclub.com',
      cardSubtitle: 'Lorem ipsum dolor',
      cardDetailedText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officia sapiente aliquid saepe ipsa suscipit possimus cum, recusandae accusantium nisi.',
    },
    {
      title: 'Q4 2022',
      cardTitle: 'Lorem Ipsum',
      url: 'http://beastfightclub.com',
      cardSubtitle: 'Lorem ipsum dolor',
      cardDetailedText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officia sapiente aliquid saepe ipsa suscipit possimus cum, recusandae accusantium nisi.',
    },
  ];

  return (
    <section
      id="roadmap"
      className="flex flex-col items-center bg-gray-700 mx-auto py-6 min-h-screen pt-24 pb-40"
    >
      <div className="flex justify-start w-full mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-left font-title border-r-8 border-red-900 pr-4 ml-4 md:pr-6 md:ml-6 lg:pr-8 lg:ml-8">
          Roadmap
        </h2>
      </div>
      <div className="max-w-4xl">
        <Chrono
          items={items}
          hideControls
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: 'rgb(127 29 29)',
            secondary: 'rgb(189 189 189)',
            cardBgColor: 'rgb(38 38 38)',
            cardForeColor: 'rgb(189 189 189)',
            titleColor: 'rgb(127 29 29)',
          }}
        />
      </div>
    </section>
  );
};

export { Roadmap };
