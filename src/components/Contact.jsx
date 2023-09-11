import React from "react";
import { useState } from "react";
import Image from "../assets/img/rmjb.png";
import Facebook from "../assets/svg/facebook.svg";
import Linkedin from "../assets/svg/linkedin.svg";
import GitHub from "../assets/svg/github.svg";
import Gmail from "../assets/svg/gmail.svg";
import Header from "./Header";

const Main = () => {
  // set value for Header state
  const [header] = useState([{ title: "Developer's Profile", id: 1 }]);

  // set array value and call it in the profile section
  const [links] = useState([
    {
      link: "https://www.facebook.com/riezcvii",
      logo: Facebook,
      alt: "Facebook",
      style: "w-[1.9rem] p-[0.1rem] mx-[0.01rem] md:my-3",
      id: 1,
    },
    {
      link: "https://github.com/rieza-ix",
      logo: GitHub,
      alt: "GitHub",
      style: "w-[1.9rem] mx-auto md:my-3",
      id: 2,
    },
    {
      link: "https://www.linkedin.com/in/riezamarie-banquillo/",
      logo: Linkedin,
      alt: "LinkedIn",
      style: "md:w-[1.9rem] w-[1.85rem] md:py-0 py-[0.03rem] mx-auto md:my-3",
      id: 3,
    },
    {
      link: "mailto:rizmarezlo@gmail.com",
      logo: Gmail,
      alt: "G-Mail",
      style: "w-[1.9rem] p-[0.1rem] mx-[0.01rem] md:my-3",
      id: 4,
    },
  ]);

  return (
    <div className="md:min-w-screen md:min-h-screen min-h-screen">
      {/* call the header state to pass it to the template in Header.jsx */}
      <Header header={header} />
      <div className="md:flex px-4">
        <div className="md:m-20">
          {/* picture */}
          <img
            src={Image}
            alt="Rieza Marie Banquillo"
            className="md:mx-40 brightness-110 md:w-[36.2rem] w-[19.5rem] mx-auto md:absolute md:inset-y-0 md:right-0 md:mb-0 mb-1"
          />

          {/* name */}
          <div className="flex flex-col md:space-y-[-2rem] md:mb-3 mb-2 space-y-[-1.3rem]">
            <h2 className="name uppercase md:text-[4.2rem] text-[2.7rem] md:ml-0 md:mt-0 mt-1 text-center">
              Rieza Marie
            </h2>
            <h1 className="name uppercase md:text-[4.5rem] text-[2.9rem] md:ml-0 md:mt-0 mt-1 text-center">
              Banquillo
            </h1>
          </div>

          {/* bio */}
          <p className="md:mx-0 mx-auto mb-7 md:px-1 px-2 md:text-left text-center md:w-[24rem] w-80">
            A passionate developer willing to be trained who wants to be part of
            an organization where I can add value and continuously enhance my
            skills.
          </p>

          {/* profile links */}
          <div className="md:p-8 grid grid-cols-4 grid-rows-1 md:grid-cols-1 md:grid-rows-4 md:absolute md:right-0 md:bottom-0 md:m-0 m-8 md:mt-0 mt-[-0.3rem] items-center justify-center">
            {links.map((profile) => (
              <ul key={profile.id}>
                <li>
                  <div className="flex items-center justify-center mx-auto">
                    <a href={profile.link} target="_blank" rel="noreferrer">
                      <img
                        src={profile.logo}
                        alt={profile.alt}
                        className={profile.style}
                      />
                    </a>
                  </div>
                </li>
              </ul>
            ))}
          </div>

          {/* buttons */}
          <div className="flex space-x-4 items-center justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1hebmoFubstqMKKk8lrc50MGPwormIxCq/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg py-2 px-4 bg-peach hover:bg-lightPeach flex focus:ring-2 ring-darkPeach"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5 my-auto mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                ></path>
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
