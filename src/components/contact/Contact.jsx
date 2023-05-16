import React, { useRef, useState } from 'react';
import "./Contact.css";
import {MdEmail} from "react-icons/md";
import {BsTelephoneFill} from "react-icons/bs";
import {IoLocationSharp} from "react-icons/io5";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const formref = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fjh0ekn', 'template_8rk0vso', formref.current, 'a4MTS0xEYqIA5DJge')
    .then((result) => {
        console.log(result.text);
        setDone(true);
        e.target.reset();
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className='c'>
      <div className='c-wrapper'>
        <div className="c-left">
          <h1 className="c-title">Contact me for your project.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <MdEmail className='c-icon'/>
              swetapadhy123@gmail.com
            </div>
            <div className="c-info-item">
              <BsTelephoneFill className='c-icon' />
              +91-9692146264
            </div>
            <div className="c-info-item" >
              <AiFillLinkedin className='c-icon' />
              https://www.linkedin.com/in/sweta-padhy-43921a205/
            </div>
            <div className="c-info-item">
            <AiFillGithub className='c-icon'/>
            https://github.com/sweta-126
            </div>
            <div className="c-info-item">
              <IoLocationSharp className='c-icon' />
              Berhampur, Odisha, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-heading">
            <b>Want to discuss your project ?</b> Always available for freelancing if the right project comes along me. 
          </div>
          <form ref={formref} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name='user_name' className="c-input" />
            <input type="text" placeholder="Email" name='user_email' className="c-input" />
            <input type="text" placeholder="Subject" name='user_subject' className="c-input" />
            <textarea rows="5" placeholder="Message" name='message' className="c-input" />
            <button className="c-button">Submit</button>
            {done && <span>Thank you...I will contact you soon.</span>}
          </form>
        </div>
        </div>  
    </div>
  )
}

export default Contact