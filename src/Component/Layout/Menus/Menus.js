import React from "react";
import "./menus.css";
import { FcAbout} from "react-icons/fc";
import { IoMdContact, IoMdHome } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { FaBookReader, FaLaptopCode } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://ociacc.com/wp-content/uploads/2019/03/blank-profile-picture-973460_1280-1030x1030.png"
              alt="Profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
                
                <div className="nav-link">
                    <IoMdHome size={25}/>
                    Home
                </div>
                <div className="nav-link">
                    <FcAbout size={25}/> 
                    about
                </div>
                <div className="nav-link">
                <FaBookReader size={25}/> 
                    Education 
                </div>
                <div className="nav-link">
                   
                    <GrTechnology size={25}/> 
                    Tech Stack
                </div>
                
                <div className="nav-link">
                    <FaLaptopCode size={25}/> 
                    Projects
                </div>
                <div className="nav-link">
                     
                    <MdOutlineWork size={25}/>
                    Work Experince
                </div>
                <div className="nav-link">
                <IoMdContact size={25}/>
                    Contact
                </div>
            </div>

          </div>
        </>
      ) : (
        <>
        <div className="nav-items">
            <div className="nav-item">
                
                <div className="nav-link">
                    <IoMdHome size={25} title="Home"/>
                
                </div>
                <div className="nav-link">
                    <FcAbout size={25} title="About"/> 
                   
                </div>
                <div className="nav-link">
                <FaBookReader size={25} title="Education"/> 
                
                </div>
                <div className="nav-link">
                   
                    <GrTechnology size={25} title="Tech Stack"/> 
                  
                </div>
                
                <div className="nav-link">
                    <FaLaptopCode size={25} title="Projects"/> 
                  
                </div>
                <div className="nav-link">
                     
                    <MdOutlineWork size={25}/>
                    
                </div>
                <div className="nav-link">
                    <IoMdContact size={25} title="Contacts"/> 
                    
                </div>
            </div>

          </div>
        </>
      )}
    </>
  );
};

export default Menus;
