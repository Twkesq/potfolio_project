import React from 'react';
import "./AboutMe.css";
import "../lineUpAnim.css";
const AboutMe = ({showAboutMe}) => {
    if (showAboutMe === true){
        return (
            <div className="AboutMe lineUpAnim">
                <h1 className="aboutme_text"><span>About Me</span></h1>
                <div className="aboutme_container">
                    <h3>I'm Oleksandr🧑🏻 (the second name - Sasha). I'm 14. From Ukraine😀</h3>
                    <h3>Live in Lviv.</h3>
                    <h3>I learn quickly📔, sociable, like to work in a team</h3>
                    <h3>I am constantly developing, I don't sit in one place</h3>
                    <h3>I will be glad for any cooperation☺</h3>
                </div>
            </div>
        );
    }
    else{
        return null;
    }


};

export default AboutMe;