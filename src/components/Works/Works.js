import React, { useEffect, useState } from 'react';
import Cards from './Cards/Cards';

const dataFilter = [
  {
    name: 'All',
    filter: 'all',
  },
  {
    name: 'React',
    filter: 'react',
  },
  {
    name: 'Mobile',
    filter: 'webDev',
  },
  {
    name: 'WordPress',
    filter: 'wordpress',
  },
];

const cardData = [
  {
    id: 5,
    name: 'My Portfolio',
    src: './images/portfolio1.png',
    link: 'https://deek.codes/',
    filter: 'react',
  },
  {
    id: 1,
    name: 'Clever Team',
    src: './images/clever-team.png',
    link: 'https://clever-team.com/',
    filter: 'all',
  },
  {
    id: 2,
    name: 'My Blog',
    src: './images/blog.png',
    link: 'https://deekcs.github.io/Blog-ReactApp/',
    filter: 'react',
  },
  {
    id: 3,
    name: 'Cello Ecommerce',
    src: './images/cello.png',
    link: 'https://cello-e-commerce.netlify.app/',
    filter: 'react',
  },
  {
    id: 4,
    name: 'iFix - Repair & Service',
    src: './images/ifix.png',
    link: 'https://i-fix.netlify.app/',
    filter: 'react',
  },
];

const Works = () => {
  const [filter, setFilter] = useState('all');
  const [cards, setCards] = useState(cardData);

  useEffect(() => {
    const filterData = cardData.filter((item) => {
      if (filter === 'all') {
        return item;
      } else {
        return item.filter === filter;
      }
    });
    setCards(filterData);
  }, [filter]);

  return (
    <>
      <section className="works">
        <div className="works-img">
          <div className="overlay">
            <div className="works-content">
              <h3 className={'mb-3'}>My Works</h3>
              <div className="works-item text-center">
                <ul
                  className={`portfolio-sorting list-unstyled text-center kayo-taps`}
                >
                  {dataFilter.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => setFilter(item.filter)}
                        className={`mixitup-control ${
                          filter === item.filter ? 'active' : ''
                        }`}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="container box-mix">
              <div className="row">
                {cards.length > 0 ? (
                  cards.map((item) => {
                    return (
                      <Cards
                        key={item.id}
                        name={item.name}
                        src={item.src}
                        link={item.link}
                        filter={item.filter}
                      />
                    );
                  })
                ) : (
                  <div className="text-center">
                    <h3>Coming Soon ...</h3>
                  </div>
                )}
                ) }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
