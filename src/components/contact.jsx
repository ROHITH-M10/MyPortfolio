import '../styles/contact.css';
import React,{useState} from 'react';


function Contact() {
    const [result, setResult] = useState("");

    async function handleFormSubmit(event) {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key","f9ae66a4-7cff-4fcb-bd8a-591587d9ac0d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if(data.success){
            setResult("Form submitted successfully!");
            event.target.reset();
        }
        else{
            setResult("Failed to submit form.");
        }

    };


  return (
    <div className="contact-container" id="contact">
        <div className="contact-heading">
            Contact Me
        </div>
        <div className="text-content">
            <div className="mail-text" >
                rohithmemail@gmail.com
            </div>
            <div className="text" >
                Feel free to reach out to me for any queries.
            </div>
        </div>
        <form onSubmit={handleFormSubmit} className="contact-form" >
            <div className="user-info">
                <div className="form-group form-name">
                    <input type="text" id="name" name="name" placeholder="Name" required/>
                </div>
                <div className="form-group form-email">
                    <input type="email" id="email" name="email" placeholder="Email" required/>
                </div>
            </div>
            <div className="form-group form-message">
                <textarea name="message" id="message" cols="20" rows="1" placeholder="Message" required ></textarea>
            </div>
            <div className="buttons">
                <button type="submit"><i className="fa fa-send-o"></i></button>
                <button type="reset"><i className="fa fa-refresh"></i></button>
            </div>
            <div className="form-result">
                {result}
            </div>
        </form>
            <div className="social-media">
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/rohith-m-profilein/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                </div>
                <div className="github">
                <a href="https://github.com/ROHITH-M10" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                </div>
                <div className="mail">
                <a href="mailto:rohithmemail@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a>
                </div>
                <div className="insta">
                <a href="https://www.instagram.com/__rohith.m__/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                </div>
            </div>

    </div>
  );
}

export default Contact;
