import React, { useRef, useState, Fragment } from 'react';
import emailjs from '@emailjs/browser';
import './Resume.css'; // Assuming you will include custom styles here

function Resume() {
    const form = useRef();
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        const name = form.current['user_name'].value;
        const email = form.current['user_email'].value;
        const message = form.current['message'].value;

        if (!name) errors.name = 'Name is required';
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        if (!message) errors.message = 'Message is required';

        return errors;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            emailjs
                .sendForm('service_sfoh0sq', 'template_c5m0y27', form.current, 'YhcCztX5l_LtwcMA7')
                .then(
                    () => {
                        alert('Mail sent successfully!');
                        form.current.reset(); // Reset the form after successful submission
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <Fragment>
            <div className="resume-container">
                <div className="resume-header">
                    <h2 className="name-title">Nivetha</h2>
                    <a
                        href="../images/Resume.pdf"
                        download="Nivetha_Resume.pdf"
                        className="resume-button"
                    >
                        Download Resume
                    </a>
                </div>
                <hr />
                <div className="section-title">
                    <h4>RESUME</h4>
                </div>
                <hr />
                <div className="contact-section">
                    <h4>CONTACT</h4>
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            {formErrors.name && <span className="error">{formErrors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            {formErrors.email && <span className="error">{formErrors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" />
                            {formErrors.message && <span className="error">{formErrors.message}</span>}
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Send" className="submit-button" />
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Resume;
