import React, {useEffect, useRef} from 'react';
import Typed from "typed.js";
import {Link} from "react-router-dom";
// import bannerImg from '../../../images/1f44b.png';

const Banner = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'Web Designer', 'Web Designer & Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="banner" id="home">
      <div className="overlay" id="overlay-light">
        <div className="container">
          <div className="banner-text">
            <div className="banner-heading">
              HI, I AM <img className="wave" src="" alt="" srcSet="" />
            </div>
            <div className="banner-sub-heading">Abdulkareem Al-deek</div>
            <h4 className="kayo-work-description" >
              &nbsp;
              <span className="kayo-work" ref={typedRef}/>
              <span className="typed-cursor " />
            </h4>
            <div className="button2 mt-3">
              <Link className=" btn-banner btn1" to="/contact">
                <i className="fa fa-rocket"> </i> Hire Me{' '}
              </Link>
              <a
                className=" btn-banner btn2"
                href="https://drive.google.com/uc?export=download&amp;id=1X0SLxdlUedSkrxQ1SdCl3D5ot0Z-kcxa"
              >
                <i className="fa fa-download"> </i> My Resume{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
