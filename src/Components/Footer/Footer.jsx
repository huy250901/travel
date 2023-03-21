import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./footer.css";
import video from "../../assets/video.mp4";
import { FiSend, FiTwitter } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Adress"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              inventore eos fugahic cum voluptatem minima, tempire non odid
              provident nobis ipsam at,doloremqua sed cupiditate ipsum in, atque
              soluta?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FiTwitter />
              <AiFillYoutube />
              <AiFillInstagram />
              <FaTripadvisor />
            </div>
          </div>

          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Payment
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Lodon
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Indonesia
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <BiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>WELCOME 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
