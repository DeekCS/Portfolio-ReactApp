import React from 'react';

const Cards = ({ src, name, link, filter }) => {
  return (
    <div className={`col-lg-4 col-md-6 col-12 ${filter}`} data-aos="fade-up">
      <div className="card-imG ">
        <img src={src} alt="" />
        <div className="overlay-hover">
          <div className="text-hover">
            <span>{name}</span> <br />
            <a href={link} target="_blank" rel="noreferrer">
              <i className="fas fa-link" /> Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
/*
  <div className="col-lg-4 col-md-6 col-12   mix all web" data-aos="fade-up">
      <div className="card-imG webDev">
        <img src={src} alt="" />
        <div className="overlay-hover">
          <div className="text-hover">
            <span>{name}</span> <br />
            <a href={link} target="_blank">
              <i className="fas fa-link"/> Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>


    className={`col-lg-4 col-md-6 col-12 ${filter}`}
 */
