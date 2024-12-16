import React from "react";
import "./style.scss";
import HeaderContent from "../../Components/HeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import {FaDev,FaDatabase} from 'react-icons/fa'
import {DiApple,DiAndroid} from 'react-icons/di';
const Profile = [
  {
    lable: "Name:", 
    Value: "Malik Kamil",
  },
  {
    lable: "Age:", 
    Value: "20",
  },
  {
  lable:'Experience:',
  Value:'2 Year'
  },
  {
    lable:'Degree:',
    Value:'Information Technology'
  }

];
 
const Description =`Hello, I'm Kamil, a front-end developer specializing in creating 
modern, responsive, and user-friendly websites and web applications. I focus on crafting visually 
engaging interfaces and seamless user experiences using HTML, CSS, JavaScript, and frameworks like React.
 I am skilled in building interactive features, optimizing performance, and ensuring compatibility across devices.
  My goal is to bring ideas to life on the screen, ensuring they are accessible, aesthetically pleasing, and functional for all users.`
const About = () => {
  return (
    <section className="about" id="about">
      <HeaderContent title="About Me"         icon= {<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            key={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front end Developer</h3>
            <p>{Description}</p>
            
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="person">Personal Information</h3>
            <ul>
              {Profile.map((item, index) => (
                <li key={index}>
                  <span className="title">{item.lable}</span>
                  <span className="values">{item.Value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            key={2}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="about__content__serviceWrapper__inner">
          <div><FaDev size={60} color="var(--background)"/></div>
          <div> <FaDatabase size={60} color="var(--background)"/></div>
          <div> <DiApple size={60} color="var(--background)"/></div>
          <div> <DiAndroid size={60} color="var(--background)"/></div>
        </div>
        </Animate>
      </div>
     
      </div>
    </section>
  );
};

export default About;
