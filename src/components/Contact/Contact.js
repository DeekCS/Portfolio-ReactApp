import React from 'react';

import '../ContactForm/contact.css';
const Card = [
  {
    id: 1,
    title: 'ADDRESS',
    desc: 'Irbid, Jordan',
    icon: 'fa fa-map-marker-alt',
  },
  {
    id: 2,
    title: 'EMAIL',
    desc: 'abdelkarim.aldeek@gmail.com',
    icon: 'fa fa-envelope',
  },
  {
    id: 3,
    title: 'PHONE',
    desc: '+962-778-123-123',
    icon: 'fa fa-phone',
  },
];

const Contact = () => {
  return (
    <React.Fragment>
      <section id="services" >

        <div className="services-img">

          <div className="overlay" id="overlay-light">

            <div className="container-flex">

              <div className="serv-content">

                {Card.map((card, index) => {
                  return (
                    <div className="card" key={index.id}>
                      <div className="box">
                          <i className={card.icon}></i>
                        <div className="text">{card.title}</div>
                        <p>{card.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

        <div className="contact-form bg-img" id="contact">
            <div className="container">
              <div className="mrkayo-main-title"></div>
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-12 col-md-offset-0 col-sm-10 col-sm-offset-1 mx-auto con-form">

                  <form
                      className="kayo-form"
                      action=""
                      method="post"
                      id="contact-form"
                  >
                    <div className="input-row">
                      <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            id="subject"
                            placeholder="Subject"
                            name="subject"
                        />
                      </div>
                      <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            id="fullName"
                            placeholder="Your Full Name"
                            name="name"
                        />
                      </div>
                    </div>
                    <div className="input-row">
                      <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            id="email"
                            placeholder="E-mail"
                            name="email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            id="phone"
                            placeholder="phone"
                            name="phone"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                  <textarea
                      className="form-control"
                      id="message"
                      placeholder="Your Message .."
                      name="message"
                  />
                    </div>
                    <div>
                      <button
                          className="btn kayo-btn-1 btn-block btn-rgba"
                          type="submit"
                      >
                        <i className="fa fa-send-o"></i> Send Your Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
      </section>

    </React.Fragment>
  );
};

export default Contact;
