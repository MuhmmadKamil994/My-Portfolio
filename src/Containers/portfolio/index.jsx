import React, { useState } from "react";
import HeaderContent from "../../Components/HeaderContent";
import image1 from "../../Images/image1.jfif";
import image2 from "../../Images/image2.jfif";
import image3 from "../../Images/image3.jfif";
import image4 from "../../Images/image4.jfif";
import image5 from "../../Images/image5.jfif";
import './style.scss'
import { FaBriefcase } from "react-icons/fa";
const data = [
  {
    id: 2,
    image: image1, 
    name: "Ecommerce",
    link:''
  },
  {
    id: 3,
    image: image2, 
    name: "My Project",
     link:''
  },
  {
    id: 3,
    image: image3,
    name: "Shoping Cart Design",
     link:'/contact'
  },
  {
    id: 2,
    image: image4,
    name: "Supplier Design",
     link:''
  },
  {
    id: 2,
    image: image5,
    name: "Notes App",
     link:''
  },
];
const filterData = [
  {
    id: 1,
    label: "All",
     link:''
  },
  {
    id: 2,
    label: "Devlopment",
     link:''
  },
  {
    id: 3,
    label: "Design",
     link:''
  },
];

const Portfolio = () => {
  const [filter,setfilter]=useState(1)
  const [hover,setHandle]=useState(null)
 const handleClicker=(current)=>{
  setfilter(current);
 }
 const handleHover=(index)=>{
setHandle(index)
 }
 console.log('==============================================')
  console.log(filter)
  console.log('==============================================')
  const filterdata=filter===1?data:data.filter(item=>item.id===filter)
  console.log(filterdata);
  return (
    <section className="portfolio" id="portfolio">
      <HeaderContent
        title="My Portfolio"
        icon={<FaBriefcase size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li className={item.id===filter?'actice':''} onClick={()=>handleClicker(item.id)} key={item.id}>{item.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {
           filterdata.map((item,index)=>(
              <div className="portfolio__content__cards__item" key={item.name.trim()}
              onMouseEnter={()=>handleHover(index)}
              onMouseLeave={()=>handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a>
                    <img src={item.image} alt="Projects" />
                  </a>
                </div>
                <div className="overlay"> 
                  {
                    index===hover&&(
                      <div>
                        <p>{item.name}</p>
                      <button>Visit</button>
                      </div> 
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
