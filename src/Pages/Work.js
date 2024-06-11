import React from 'react'
import "./Work.css"
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { FaLaptopCode } from 'react-icons/fa'
import { TbNetwork } from 'react-icons/tb'

const Work = () => {
  return (
    <>
     <div className='container work col-10'>
     <h2 className="col-12 text-center">Work Experiece</h2>
     <hr />
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'White', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #138781' }}
    date="2023-2023"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaLaptopCode/>}
  >
    <h3 className="vertical-timeline-element-title">MERN</h3>
    <p className="">Actively engaged in learning through online courses, workshops, and staying updated with the latest trends in the MERN stack ecosystem.</p>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2023-2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<TbNetwork/>}
  > 
    <h3 className="vertical-timeline-element-title">Web development</h3>
    <h5 className="vertical-timeline-element-subtitle"> 
        Soft Tech Solution,pvt
    </h5>
    <p>
    We are seeking a motivated and talented Web Development Intern to join our dynamic team. This internship offers a hands-on opportunity to work on real-world projects, develop your skills in web development, and gain valuable experience in a professional setting
    </p>
    
  </VerticalTimelineElement>
        </VerticalTimeline>
     </div>
    </>
  )
}

export default Work
