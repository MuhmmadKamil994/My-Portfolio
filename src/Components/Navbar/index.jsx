import React, { useState } from 'react';
import './style.scss'
import {Link} from 'react-router-dom'
import {FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';


const Navbar = () => {
  const [handle,sethandle]=useState(false)
  const handleBar=()=>{
sethandle(!handle)
  }
  const navbar=[
    {
      label:'Home',
      to:'/'
    }, 
    {
      label:'About Us',
      to:'/about'
    },
    {
      label:'Portfolio',
      to:'/portfolio'
    },
    {
      label:'Skills',
      to:'/skills'
    },
    {
      label:'Contact',
      to:'/contact'
    },
    {
      label:'Resume',
      to:'/resume'
    }
  ]
  return (
    <div>
       <nav className="Navbar">
        <div className="Navbar__container">
<Link  to='/' className="Navbar__container__logo">
<AiOutlineHome size={30} />

</Link>
        </div>
        <ul className={`Navbar__container__menu ${handle ? 'active' : ''}`}>

          {
            navbar.map((item,key)=>(

           
          <li key={key} className="Navbar__container__menu__items">
            <Link className='Navbar__container__menu__items__links' to={item.to}>
                 {item.label}
            </Link>
          </li>
           ))
}
        </ul>
     <div className="sideBar" onClick={handleBar}>
{handle?<HiX size={30}/>:<FaBars size={30}/>}
     </div>

       </nav>
     
    </div>
  )
}

export default Navbar;
