import './contact.css'
import emailjs from '@emailjs/browser';
import React, {useContext, useRef,useState } from 'react';
import {ThemeContext} from "../../Context"

function Contact () {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone]= useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_eln95fl', 'template_vpwb6jo', form.current, '7amnknfavnl3SQknr')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    };

    return(
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode?'white': ''}} >Get in touch</span>
                    <span>Contact me</span>
                   
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail} >
                    <input 
                    style={{background: darkMode?'rgba(255, 255, 255, 0.26)': ''}}
                    type="text"
                    name="user-name"
                    className='user'
                    placeholder='Name'
                    />
                    <input 
                    style={{background: darkMode?'rgba(255, 255, 255, 0.26)': ''}}
                    type="email"
                    name="user-email"
                    className='user'
                    placeholder='Email'
                    />
                    <textarea 
                    style={{background: darkMode?'rgba(255, 255, 255, 0.26)': '',}}
                    name="message" 
                    className='user'
                    placeholder='Message'
                    ></textarea>
                    <input 
                    type="submit"
                    value="Send"
                    className="button"
                    />
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div
                    className="blur c-blur1"
                    style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact