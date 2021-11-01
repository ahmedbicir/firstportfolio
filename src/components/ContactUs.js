import React from 'react'
import emailjs from 'emailjs-com';

function ContactUs() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s10tg9a', 'template_q3bamxl', e.target, 'user_X4ygPu7e6J43JWYqJqEJG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div className="head">

            <section className="form">
                <div>
                    <h3>Let's talk </h3>
                    <p>For any information or help about website you can contact with me. </p>
                    <p> would love to hear from you!</p>
                </div>
                <form onSubmit={sendEmail}>
                    <div className="cont1">
                        <input type="text" name="Name" placeholder="Enter Name " />
                        <input type="email" name="Email" placeholder="Enter your email " />
                        <input type="text" name="Phone" placeholder=" Enter your Phone " />
                        <textarea name="Message" placeholder="Message"></textarea>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ContactUs
