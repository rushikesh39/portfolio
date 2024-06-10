import React from "react";
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";
const Education = () => {
  return (
    <>
      <div className="container education col-10">
        <h2 className="col-12 text-center">Education Details</h2>
        <hr />
        <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2021-2024"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoMdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">BE-Computer Enginnering</h3>
    <h4 className="vertical-timeline-element-subtitle"> From Savitribai Phule Pune University in Samarth Group of Institution,Belhe</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2019-2021"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoMdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">Diploma - Computer Enginnering</h3>
    <h4 className="vertical-timeline-element-subtitle"> From Maharashtra State Board of Technical Education in Samarth Polytechnic,Belhe</h4>
    
  </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
     
    </>
  );
};

export default Education;
