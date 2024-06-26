import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education">
        <div className="timeline">
          <div className="sub-content">
            <div className="progress-circle"></div>
            <div className="sub-heading">
              B.Tech : Computer Science and Engineering
              <span className="Grad-date">Dec 2020 - Apr 2024</span>
            </div>
            <div className="content">
              B V Raju Institute of Technology
              <br />
              Vishnupur, Narsapur, Medak, Telangana
              <br />
              CGPA: 9.01
            </div>
          </div>
          <div className="sub-content">
            <div className="progress-circle"></div>
            <div className="sub-heading">
              Intermediate
              <span className="Grad-date">Jun 2018 - Mar 2020</span>
            </div>
            <div className="content">
              Sri Chaitanya Junior Kalashala, Bhaskarbhavan, Kukatpally
              <br />
              State board of Intermediate Education, Telangana - Grade: 97.4%
            </div>
          </div>
          <div className="sub-content">
            <div className="progress-circle"></div>
            <div className="sub-heading">
              SSC
              <span className="Grad-date">Jun 2017 - Mar 2018</span>
            </div>
            <div className="content">
              Vamsi High School - State board of Secondary Education, Telangana
              <br />
              CGPA: 9.8
            </div>
          </div>
        </div>
    
    </div>
  );
};
export default Education;
