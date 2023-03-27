import React from 'react';
import './MyProjects.css';
import ProjectItem from "./project_item";
import "../lineUpAnim.css"
const MyProjects = ({showProjects}) => {
    if (showProjects === true){
        return (
            <div className="lineUpAnim">
                <h1 className="projects_text"><span>My Projects</span></h1>
                <div className="projects_list">
                    <ProjectItem image_path='https://i.ytimg.com/vi/oiX-6Y2oGjI/maxresdefault.jpg' text="Easy calculator on React.js"/>
                    <ProjectItem image_path='https://res.cloudinary.com/practicaldev/image/fetch/s--XwNhrRR_--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7pkfs5vyft03x5ohb1ww.png' text="Portfolio on React.js"/>
                    <ProjectItem image_path='https://i.ytimg.com/vi/vIxGDq1SPZQ/maxresdefault.jpg' text="Food Ordering App on React.js"/>
                    <ProjectItem image_path='https://i.ytimg.com/vi/c1xTDSIXit8/maxresdefault.jpg' text="Shopping Card on React.js"/>
                </div>
            </div>
        );
    }
    else {
        return null;
    }
};

export default MyProjects;