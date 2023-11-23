import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import STUKM23 from "../assets/logo/STUKM23.png";
// import tiktok from '../assets/logo/tiktok.svg';

import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <div className="navbar-pembungkus">
          <div className="box-logo">
            <img className="logo-stukm" src={STUKM23} alt="" />
            <Link to="/" className="text-stukm">
              STUKM 2023
            </Link>
          </div>
          <div className="box-option-navbar">
            {location.pathname === "/" && (
              <ScrollLink
                className="navbar-vote"
                to="votingForm"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                VOTE
              </ScrollLink>
            )}
            {/* <Link to="/#votingForm" className="navbar-vote">VOTE</Link> */}
            <Link to="/ukm" className="navbar-ukm">
              UKM
            </Link>
            <Link to="/sponsor" className="navbar-sponsor">
              SPONSOR
            </Link>
            {/* <Link to="/medpar" className="navbar-medpar">MEDPAR</Link>  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
