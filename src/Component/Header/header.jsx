import React from 'react'
import './header.css';
import { FaHome } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { AiFillProduct } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { RiLoginCircleFill } from "react-icons/ri";
import { BsFillSignIntersectionFill } from "react-icons/bs";
import { TiInfinityOutline } from "react-icons/ti";



const Header = () => {
  return (
     <div id="container">
          <div id="col1">
              <TiInfinityOutline id="titleIcon"/>
              <h2>SNAPIT</h2>
          </div>
          <div id="col2">
              <button className="accBut"><FaHome /> Home</button>
              <button className="accBut"><BsBriefcaseFill />About</button>
              <button className="accBut"><AiFillProduct />Product</button>
              <button className="accBut"><TbDeviceLandlinePhone />Contact</button>
          </div>
          <div id="col3">
              <button className="logBut"><RiLoginCircleFill/>LogIn</button>
              <button className="logBut"><BsFillSignIntersectionFill/>SignUp</button>
          </div>
     </div>
  )
}

export default Header


