import React from 'react';
import "./Intro.css";

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-wrapper'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>Sweta Padhy</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Freelancer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I design and develop MERN Stack applications for users . My projects contain a flexible User Interface which helps for better interaction. 
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src="/img/img.jpeg" alt="" className="i-img" />
            </div>
        </div>
    </div>
  )
}

export default Intro