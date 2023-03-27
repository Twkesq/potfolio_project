import React from 'react';
import SkillItem from "./skill_item";
import "./my_skills.css"
import "../lineUpAnim.css"
const MySkills = ({showSkills}) => {

    if (showSkills === true){
        return (
            <div className="lineUpAnim2">
                <h1 className="skill_text"><span>My skills</span></h1>
                <div className="skills_list">


                    <div className="frontend_skills">
                        <h1 className="skill_text"><span>FrontEnd Skills</span></h1>
                        <div className="column_item">
                            <SkillItem image_path="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" text="HTML5 is the standard markup language for documents designed to be displayed in a web browser"/>
                            <SkillItem image_path="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" text="CSS3 is a style sheet language used for describing the presentation of a document written in HTML"/>
                            <SkillItem image_path=" https://academyclass.com/wp-content/uploads/2021/10/Javascript.png" text="Java Script is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS"/>
                        </div>
                        <div className="column_item">
                            <SkillItem image_path="https://cdn.cdnlogo.com/logos/b/74/bootstrap-5.svg" text="Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."/>
                            <SkillItem image_path="https://img.icons8.com/plasticine/512/react.png" text="React.js is a free and open-source front-end JavaScript library[3] for building user interfaces based on components"/>
                            <SkillItem image_path="https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55" text="Redux is an open-source JavaScript library for managing and centralizing application state"/>
                        </div>
                    </div>

                    <div className="backendend_skills">
                        <h1 className="skill_text"><span>BackEnd Skills</span></h1>
                        <div className="column_item">
                            <SkillItem image_path="https://cdn-icons-png.flaticon.com/512/1183/1183669.png" text="Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."/>
                            <SkillItem image_path="https://gitlab.com/uploads/-/system/project/avatar/31295677/pngwing.com__1_.png" text="Django is a free and open-source, Python-based web framework that follows the model–template–views (MTV) architectural pattern"/>
                            <SkillItem image_path="https://cdn-icons-png.flaticon.com/512/919/919825.png" text="Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more"/>
                        </div>
                        <div className="column_item">
                            <SkillItem image_path="https://img.freepik.com/free-icon/snakes_318-368381.jpg" text="Python is a high-level programming language. Its design philosophy emphasizes code readability with the use of significant indentation"/>
                            <SkillItem image_path="https://img.icons8.com/color/512/mongodb.png" text="MongoDB is a source-available cross-platform document-oriented database program"/>
                            <SkillItem image_path="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" text="MySQL is an open-source relational database management system (RDBMS)"/>
                        </div>
                    </div>


                </div>
            </div>
        );
    }

    else {
        return null;
    }
};

export default MySkills;

//