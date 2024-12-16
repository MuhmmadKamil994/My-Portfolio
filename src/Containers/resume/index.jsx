import React from 'react'
import HeaderContent from '../../Components/HeaderContent'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Data } from './utils'
import './style.scss'
import {MdWork} from 'react-icons/md'
import { FaUserTie } from 'react-icons/fa'
const Resume = () => {
  return (
    <section className="resume" id="resume">
    <HeaderContent
    title="My Resume"
    icon={<FaUserTie size={40}/>}  
    />
    <div className="timeline"> 
      <div className="timeline__experience">
        <h3 className='timeline__experience__header'>Experience</h3>
        <VerticalTimeline
        layout={'1-column'}
        lineColor='var(--background)'
        >
{
  Data.Experience.map((item,index)=>(
    <VerticalTimelineElement
    key={index}
    className='timeline__experience__vertical-timeline-element'
    contentStyle={{
      background:'none',
      color:'var(--sub-text-color)',
      border:'1.5px solid var(--background)'
    }}
    date='2024 - present'
    icon={<MdWork/>}
    iconStyle={{
      background:'var( --nav-background-color)',
      color:'var(--background)'
    }}
    >
      <div className="vertical-timeline-element-title-wrapper">
        <h3>
          {item.title}
        </h3>
        <h4>
          {item.subtitle}
        </h4>
     
      </div>
      <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>

    </VerticalTimelineElement>
  ))
}
        </VerticalTimeline>
      </div>
      <div className="timeline__education">
       <h3 className='timeline__education__header'> Education</h3>
       <VerticalTimeline
        layout={'1-column'}
        lineColor='var(--background)'
        >
{
  Data.education.map((item,index)=>(
    <VerticalTimelineElement
    key={index}
    className='timeline__experience__vertical-timeline-element'
    contentStyle={{
      background:'none',
      color:'var(--sub-text-color)',
      border:'1.5px solid var(--background)'
    }}
    date='2024 - present'
    icon={<MdWork/>}
    iconStyle={{
      background:'var( --nav-background-color)',
      color:'var(--background)'
    }}
    >
      <div className="vertical-timeline-element-title-wrapper">
        <h3>
          {item.title}
        </h3>
        <h4>
          {item.subtitle}
        </h4>
       
      </div>
      <p className='vertical-timeline-element-title-wrapper-description' >{item.description}</p>

    </VerticalTimelineElement>
  ))
}
        </VerticalTimeline>
      </div>
    </div>
        </section> 
  )  
}

export default Resume;
 