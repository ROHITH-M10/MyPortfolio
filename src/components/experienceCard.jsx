import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../styles/experienceCard.css';
import React from 'react';



function ExperienceCard(props) {
  return (
    <div className="experience-card-container">
            <div className="experience-card">
            <div className="company">
                <div className="company-name">
                  {props.company}

                    <div className="year">
                    {props.date}
                  </div>
                </div>
                <div className="role">
                  {props.role}

                  <div className="view">
                    <AnchorLink href="#projects"><i className="fa view-icon">&#xf08e;</i></AnchorLink>
                  </div>
                </div>
                {/* <div className="description">
                  {props.description}
                </div> */}

            </div>
            {/* <div className="numbers">
                
            </div> */}
        </div>
    </div>
  );
}

export default ExperienceCard;
