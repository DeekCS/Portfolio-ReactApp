import React from 'react';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Card = [
    {
        id: 1,
        title:'ADDRESS',
        desc:'Irbid, Jordan'
    },
    {
        id: 2,
        title:'EMAIL',
        desc:'abdelkarim.aldeek@gmail.com'
    },
    {
        id: 3,
        title:'PHONE',
        desc:'+962-778-123-123'
    },
]

const Contact = () => {
    return (
        <React.Fragment>
            <section id="services">
                <div className="services-img">
                    <div className="overlay" id="overlay-light">
                        <h3>CONTACT ME</h3>
                        <div className="container-flex">
                            <div className="serv-content">
                                {Card.map((card,index)=>{
                                    return(
                                        <div className="card" key={index.id}>
                                            <div className="box">
                                                <div className="text">{card.title}</div>
                                                <p>{card.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Contact;
