import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { AiOutlineInstagram,AiOutlineTwitter,AiOutlineDribbble } from "react-icons/ai";
import { BiLogoFacebook,BiLogoLinkedin,BiLogoPinterestAlt } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <div className="social">
        <h4>About Foundation.</h4>
        <p className="desc">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <h4>Connect</h4>
        <div className="socialIcons">
          <Link className="iconsLink">
            <AiOutlineInstagram />
          </Link>
          <Link className="iconsLink">
            <AiOutlineTwitter />
          </Link>
          <Link className="iconsLink">
            <BiLogoFacebook />
          </Link>
          <Link className="iconsLink">
            <BiLogoLinkedin />
          </Link>
          <Link className="iconsLink">
            <BiLogoPinterestAlt />
          </Link>
          <Link className="iconsLink">
            <AiOutlineDribbble />
          </Link>
        </div>
      </div>
      <div className="about">

         <div className="company">
         <h4>Company</h4>
          <ul className="companyLinks">
            <Link>
              <li>About us</li>
            </Link> 
            <Link>
              <li>Services</li>
            </Link>
            <Link>
              <li>News</li>
            </Link>
            <Link>
              <li>Careers</li>
            </Link>
            <Link>
              <li>Contact</li>
            </Link>
          </ul>
         </div>
         <div className="contactComp">
          <h4>Contact</h4>
          <div className="contactDesc">
          <p>43 Raymouth Rd. Baltemoer, London 3910</p>
          <Link>+1(123)-456-7890</Link>
          <Link>+1(123)-456-7890</Link>
          <Link>info@mydomain.com</Link>
          </div>

        </div>
      </div>
      </div>
      <p className="Copyright">Copyright ©2023 All rights reserved | This template is made with  by Ali</p>
    </footer>
  );
};

export default Footer;
