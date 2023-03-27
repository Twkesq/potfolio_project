import React from 'react';
import "./project_item.css";
const ProjectItem = ({image_path ,text}) => {
    return (
        <div className="project_item">
            <img src={image_path} alt="" className="ImProj"/>
            <div className="overlayProj">
                <div className="textProj">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;