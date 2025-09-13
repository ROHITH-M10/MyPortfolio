import '../styles/educationCard.css';
import React from 'react';



function EducationCard(props) {
  return (
    <div className="education-card-container" >
            <div className="education-card">
            <div className="degree">
                <div className="institute">
                  {props.institute}
                </div>
                <div className="course">
                  {props.degree}
                </div>
            </div>
            <div className="numbers">
                <div className="grade">
                  {props.grade}
                </div>
                <div className="year">
                  {props.year}
                </div>
            </div>
        </div>
    </div>
  );
}

export default EducationCard;
