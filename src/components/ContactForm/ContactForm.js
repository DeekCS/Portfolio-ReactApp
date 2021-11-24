import React from 'react';
import inputForm from './inputForm';
import './contact.css'
const inputData = [
    {
        id: "fullName",
        name: 'name',
        type: 'text',
        placeholder: 'Name',
        required: true,
        value: ''
    },
    {
        id:"email",
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        required: true,
        value: '',

    },
    {
        id:"phone",
        name: 'phone',
        type: 'text',
        placeholder: 'phone',
        required: true,
        value: '',
    }

]
function ContactForm(props) {
    return (
        <div className="contact-form bg-img" id="contact">
            <div className="overlay">
                <div className="container">
                    <div className="mrkayo-main-title">
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-8 col-lg-offset-2 col-md-12 col-md-offset-0 col-sm-10 col-sm-offset-1 mx-auto con-form">
                            <h2 className="text-center text-msg">
                                Send Message
                                <span className="kayo-line" />
                            </h2>
                            <form className="kayo-form" action="" method="post" id="contact-form">
                                <div className="input-row">
                                    <div className="form-group">
                                        <input className="form-control" type="text" id="subject" placeholder="Subject"
                                               name="subject"
                                            />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" id="fullName"
                                               placeholder="Your Full Name" name="name"
                                        />
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="form-group">
                                        <input className="form-control" type="text" id="email" placeholder="E-mail"
                                               name="email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" id="phone" placeholder="phone"
                                               name="phone"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="message" placeholder="Your Message .."
                                              name="message"
                                    />
                                </div>
                                <div>
                                    <button className="btn kayo-btn-1 btn-block btn-rgba" type="submit">
                                        <i className="fa fa-send-o"></i> Send Your Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;