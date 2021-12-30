import React, {useEffect, useState} from 'react';
import './toggle.css'

const ToggleTheme = () => {
  const [theme, setTheme] = useState('dark');
  const [toggle, setToggle] = useState(false);


    const toggleTheme = () => {
          const body = document.querySelector('body');

          body.classList.toggle('dark-theme');
          setToggle(!toggle);
          setTheme(toggle ? 'dark' : 'light');

    };

  return (

        <div className="toggle-theme">
          <button onClick={toggleTheme}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>

  );
};

export default ToggleTheme;