import React from 'react'
import HeaderContent from '../../Components/HeaderContent'
import { Data } from './utils'
import { Animate,AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress'
import './style.scss'
import { FaCogs } from 'react-icons/fa'
const Skills = () => {
  return (
    <section className="skills" id="skills">
    <HeaderContent
    title="My Skills"
    icon={<FaCogs size={40}/>}
    />
    <div className="skills__wrapper">{
     Data.map((item,index) => (
<div key={index} className="skills__wrapper__inner">
<Animate
play
duration={1} 
delay={0.5}
start={{
  transform:'translateX(-200px)'
}}
end={{
  transform:'translatex(0px)'
}} 
>
<h3  className="skills__wrapper__inner__catagory">{item.label}</h3>

 <div>
{
  item.data.map((Data,j)=>(
  <AnimateKeyframes
  play
  duration={1}
  keyframes={['opacity:1','opacity:0']}
  iterationCount={1}
  >
    <div className="progressBar" key={j} >
      <p>{Data.skill}</p>
      <Line
      percent={Data.percentage}
      strokeLinecap='square'
      strokeWidth='3'
    trailWidth='3'
      strokeColor='var(--background)'
      />
    </div>
  </AnimateKeyframes>

))
}
</div>

</Animate>
</div>
 ))
 }
    </div>
        </section>
    )
}

export default Skills;
 