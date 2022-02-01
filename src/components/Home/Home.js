import React, { useEffect } from 'react';

import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';

const Home = () => {
  //useEffect for title page
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <div>
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
