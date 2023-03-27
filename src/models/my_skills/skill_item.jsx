import React from 'react';
import "./skill_item.css"
const SkillItem = ({image_path , text}) => {
    return (
        <div className="skill_item">
            <img src={image_path} alt="image"/>
            <div className="overlay">
                <div className="text">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default SkillItem;