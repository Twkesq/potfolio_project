import React, {useState} from 'react';
import "./Header.css";
import MySkills from "../my_skills/My_skills";
import "../navbar_btns/navbar_btn.css";
import MyProjects from "../my_projects/MyProjects";
import AboutMe from "../about_me/AboutMe";

const Header = () => {
    const [showSkills , setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showAboutMe, setShowAboutMe] = useState(false);

    function changeShowSkills(){
        setShowSkills(!showSkills);
        setShowProjects(false);
        setShowAboutMe(false);
        console.log(showSkills);
    }

    function changeShowProjects(){
        setShowProjects(!showProjects);
        setShowSkills(false);
        setShowAboutMe(false);
    }

    function changeShowAboutMe(){
        setShowAboutMe(!showAboutMe);
        setShowSkills(false);
        setShowProjects(false);
    }

    return (
        <div className="header lineUp">
            <div className="header_about ">
                <div className="text_nav">
                    <h3>Hi!</h3>
                    <h2>I'm Oleksandr</h2>
                    <div className="text_nav2">
                        <h1>I`m <b>Frontend</b> Developer</h1>
                    </div>
                    <h4>Programming - one love ❤</h4>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="https://t.me/twkesqQ" className="contacts_btn" target={"_blank"} rel="noreferrer">Contacts ME</a>

                </div>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src="https://cdn.pixabay.com/photo/2019/07/16/18/18/frontend-4342425_960_720.png" className="image_nav" alt="image"/>
            </div>

            <div className="navbar_btns">
                <button className="btn_nav" onClick={changeShowAboutMe}>About me</button>
                <button className="btn_nav" onClick={changeShowSkills}>My skills</button>
                <button className="btn_nav" onClick={changeShowProjects}>My Projects</button>
            </div>

            <MySkills showSkills={showSkills}/>
            <MyProjects showProjects={showProjects}/>
            <AboutMe showAboutMe={showAboutMe} />
        </div>
    );
};

export default Header;
















