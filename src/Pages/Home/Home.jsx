import React, { useState } from "react";
import "./Home.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Components/Navbar/Navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPenRuler,
  faMicrochip,
  faLink,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  // About section functionality

  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleDownloadResume = async () => {
    try {
      // Fetch the resume file from the public folder
      const response = await fetch("/Khaled_CV.pdf");
      const blob = await response.blob();

      // Create a URL for the blob object
      const url = window.URL.createObjectURL(new Blob([blob]));

      // Create an anchor element with the URL and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Khaled_CV.pdf");
      document.body.appendChild(link);
      link.click();

      // Cleanup
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast.error("Error downloading resume");
    }
  };

  // View more functionality

  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(true);
  };

  const handleHide = () => {
    setShowMore(false);
  };

  // Contact form functionality

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyiMFJxNG-Oe1735pct_MGwOk1EhP7t5LKAu9u4KHLdk_NqJIPJiSrXQrbs6Lzco8j7/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        e.target.reset();
      } else {
        toast.error("Form submission failed");
        throw new Error("Failed to submit message");
      }
    } catch (error) {
      console.error("Error!", error.message);
      toast.error("Error", error.message);
    }
  };

  // Icon library

  library.add(
    faCode,
    faPenRuler,
    faMicrochip,
    faLink,
    faEnvelope,
    faInstagram,
    faLinkedin,
    faGithub
  );

  return (
    <div>
      <div className="header-section" id="header">
        <div className="container">
          <Navbar />
          <div className="header-text">
            <p>Hi, I'm</p>
            <h1>Khaled Ziane</h1>
            <h2>Let's build solutions together.</h2>
            <a
              href="#contact"
              className="header-btn"
              aria-label="Get-started-button"
            >
              Get started
            </a>
          </div>
        </div>
      </div>

      <div className="about-section" id="about">
        <div className="container">
          <div className="row">
            <div className="abt-col-1">
              <img
                src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/code-512.png"
                alt="Andres-Choque-Professional"
              />
            </div>
            <div className="abt-col-2">
              <h1 className="sub-header">Who am I</h1>
              <p>
                I am a Software Engineer with a passion for technology. My
                specialty is on the <strong>Front-End</strong>. My professional
                experience building scalable web applications included
                designing, developing, implementing, maintaining applications
                and solutions using a range of technologies and programming
                language.
              </p>

              <div className="tabs">
                <p
                  className={`tab-links ${
                    activeTab === "skills" ? "act-link" : ""
                  }`}
                  onClick={() => openTab("skills")}
                >
                  <strong>Skills</strong>
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "experience" ? "act-link" : ""
                  }`}
                  onClick={() => openTab("experience")}
                >
                  <strong>Experience</strong>
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "education" ? "act-link" : ""
                  }`}
                  onClick={() => openTab("education")}
                >
                  <strong>Education</strong>
                </p>
              </div>

              <div
                className={`tab-conts ${
                  activeTab === "skills" ? "act-tab" : ""
                }`}
                id="skills"
              >
                <ul>
                  <li>
                    <span>Front-End</span>
                    <br />
                    HTML, CSS, SASS, Javascript, Typescript ,React, Redux,
                    Material UI
                  </li>
                  <li>
                    <span>Back-End</span>
                    <br />
                    Node JS, Express JS, PHP, MongoDB, MySQL, SQL
                  </li>
                  <li>
                    <span>Tools</span>
                    <br />
                    Git, GitHub, Postman, Visual Studio Code
                  </li>
                  <li>
                    <span>Operating Systems</span>
                    <br />
                    Windows, Linux, Android
                  </li>
                  <li>
                    <span>Languages</span>
                    <br />
                    Arabic, French and English
                  </li>
                </ul>
              </div>

              <div
                className={`tab-conts ${
                  activeTab === "experience" ? "act-tab" : ""
                }`}
                id="experience"
              >
                <ul>
                  <li>
                    <span>July. 2021 &nbsp;-&nbsp; 2024</span>
                    <br />
                    Freelance Web Developer.
                  </li>
                  <li>
                    <span>December 2021 &nbsp;-&nbsp; September 2023</span>
                    <br />
                    Technical Support Engineer at BM tech
                  </li>
                  {/* <li>
                    <span>December. 2023 &nbsp;-&nbsp;February 2024 </span>
                    <br />
                    Web development Instructor
                  </li> */}
                  <li>
                    <span> September 2017 &nbsp;-&nbsp; December 2017</span>
                    <br />
                    Practical internship at ENIE - Enterprise National in
                    Electronics
                  </li>
                </ul>
              </div>

              <div
                className={`tab-conts ${
                  activeTab === "education" ? "act-tab" : ""
                }`}
                id="education"
              >
                <ul>
                  <li>
                    <span>Computer Science (3 years)</span>
                    <br />( High School in Computer Science)
                  </li>
                  <li>
                    <span>Licence Degree in Computer Science</span>
                    <br />
                    UHBC ( University Hassiba Ben Bouali )
                  </li>
                </ul>
              </div>
            </div>
            <div className="resume">
              <button
                onClick={handleDownloadResume}
                className="btn"
                aria-label="Download-resume-button"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section" id="services">
        <div className="container">
          <h1 className="sub-header">Work expertise</h1>

          {/* <div className="services-list">
            <div>
              <FontAwesomeIcon icon={faCode} />
              <h2>
                <strong>Web & App Development</strong>
              </h2>
              <p>
                Web Applications are key for a quality product. I enjoy writing
                in multiple languages helping the client to reach their goals.
              </p>
            </div>

            <div>
              <FontAwesomeIcon icon={faPenRuler} />
              <h2>
                <strong>Web Design</strong>
              </h2>
              <p>
                User Experience (UX) is the most important aspect of a quality
                product. I love designing products using multiple design tools.
              </p>
            </div>

            <div>
              <FontAwesomeIcon icon={faMicrochip} />
              <h2>
                <strong>AI Development</strong>
              </h2>
              <p>
                With the growth of Artificial Intelligence it's a priority to
                build software and integrate AI solutions to keep up with
                innovation.
              </p>
            </div>
          </div> */}
          <div className="skills">
            <div className="image-container">
              <img
                src=" https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"
                alt=""
              />
            </div>

            <div className="image-container">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt=""
              />
            </div>

            <div className="image-container">
              <img
                src=" https://camo.githubusercontent.com/20b3f83999384db960cfc16cab4e9cae80cfa38610310df33b1d898a20872d42/68747470733a2f2f692e626c6f67732e65732f3534356366382f6573362d6c6f676f2f6f726967696e616c2e706e67"
                alt=""
              />
            </div>

            <div className="image-container">
              <img
                src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                alt=""
              />
            </div>
            <div className="image-container">
              <img
                src="  https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
                alt=""
              />
            </div>
            <div className="image-container">
              <img src="https://mui.com/static/logo.png" alt="" />
            </div>
            <div className="image-container">
              <img
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                alt=""
              />
            </div>

            <div className="image-container">
              <img
                src=" https://gyazo.com/85e7ce9196ae635161fec921602903a7/max_size/1000"
                alt=""
              />
            </div>

            <div className="image-container">
              <img
                src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                alt=""
              />
            </div>

            <div className="image-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
                alt=""
              />
            </div>

            <div className="image-container">
              <img
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                alt=""
              />
            </div>
            {/* <div className="image-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="portfolio-section" id="portfolio">
        <div className="container">
          <h1 className="sub-header">Projects</h1>
          <div className="work-list">
            <div className="work">
              <img src="/img/14.png" alt="navire" />
              <div className="layer">
                <h3>
                  <strong>Navire</strong>
                </h3>
                <p>
                  The HR software solution offers a management system for
                  employees including managing their accounts, documents and
                  reports.
                  <br /> REACT JS, Node JS, MySql
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    gap: "16px",
                  }}
                >
                  <a
                    href="https://github.com/samikoum/Navire-v3"
                    target="_blank"
                    // rel="noreferrer noopener"
                    // aria-label="Tactica-ministries-website-link"
                  >
                    <div>
                      <FontAwesomeIcon
                        icon="fa-brands fa-github"
                        fontSize={20}
                      />
                      Github
                    </div>
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1ze-jPOoSTODw32KMdzLU3mK6nTiXgHeQ"
                    target="_blank"
                  >
                    <div>
                      <FontAwesomeIcon icon={faLink} fontSize={20} />
                      Demo
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="work">
              <img src="/img/drover.png" alt="Tactica-ministries" />
              <div className="layer">
                <h3>
                  <strong>Drover Clone</strong>
                </h3>
                <p>
                  Web Application for hiring of automobiles (motor cars) for
                  relatively short periods. <br /> REACT JS
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    gap: "16px",
                  }}
                >
                  <a
                    href="https://github.com/samikoum/Drover-Clone"
                    target="_blank"
                    // rel="noreferrer noopener"
                    // aria-label="Tactica-ministries-website-link"
                  >
                    <div>
                      <FontAwesomeIcon
                        icon="fa-brands fa-github"
                        fontSize={20}
                      />
                      Github
                    </div>
                  </a>
                  <a
                    href="https://drover-clone-3ktx.vercel.app/"
                    target="_blank"
                  >
                    <div>
                      <FontAwesomeIcon icon={faLink} fontSize={20} />
                      Demo
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="work">
              <img src="/img/11.png" alt="Drontec" />
              <div className="layer">
                <h3>
                  <strong>BEATY</strong>
                </h3>
                <p>
                  E-commerce web application has made it possible to purchase
                  Cosmetic products. <br /> HTML, CSS, JS, PHP, MySql
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    gap: "16px",
                  }}
                >
                  <a
                    href="https://github.com/samikoum/Beaty"
                    target="_blank"
                    // rel="noreferrer noopener"
                    // aria-label="Tactica-ministries-website-link"
                  >
                    <div>
                      <FontAwesomeIcon
                        icon="fa-brands fa-github"
                        fontSize={20}
                      />
                      Github
                    </div>
                  </a>

                  {/* <a
                    href="https://drive.google.com/drive/folders/1ze-jPOoSTODw32KMdzLU3mK6nTiXgHeQ"
                    target="_blank"
                  >
                    <div>
                      <FontAwesomeIcon icon={faLink} fontSize={20} />
                      Demo
                    </div>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="work">
              <img src="/img/moz.png" alt="Drontec" />
              <div className="layer">
                <h3>
                  <strong>Educal</strong>
                </h3>
                <p>
                  Web application for educational purposes. <br /> REACT JS
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    gap: "16px",
                  }}
                >
                  <a
                    href="https://github.com/khaled-ziane/educal"
                    target="_blank"
                    // rel="noreferrer noopener"
                    // aria-label="Tactica-ministries-website-link"
                  >
                    <div>
                      <FontAwesomeIcon
                        icon="fa-brands fa-github"
                        fontSize={20}
                      />
                      Github
                    </div>
                  </a>
                  <a href="https://edutest2021.netlify.app/" target="_blank">
                    <div>
                      <FontAwesomeIcon icon={faLink} fontSize={20} />
                      Demo
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* {showMore && (
            <div className="work-list-2">
              <div className="work">
                <img src={workpic4} alt="Center-for-financial-literacy" />
                <div className="layer">
                  <h3>
                    <strong>Center for Financial Literacy App</strong>
                  </h3>
                  <p>
                    CFL App allows you to visualize and budget your finances.
                  </p>
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7061417643429257216/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Center-for-financial-literacy-linkedin-link"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </div>

              <div className="work">
                <img src={workpic5} alt="Andres-Choque-Github" />
                <div className="layer">
                  <h3>
                    <strong>School Projects</strong>
                  </h3>
                  <p>Holds a collection of software built for school.</p>
                  <a
                    href="https://github.com/andreschoque3/LU-School-Projects"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Andres-choque-github-webpage"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </div>

              <div className="work">
                <img src={workpic6} alt="Andres-Choque-website" />
                <div className="layer">
                  <h3>
                    <strong>Business Website</strong>
                  </h3>
                  <p>
                    The website that showcases all the software & solutions
                    provided.
                  </p>
                  <a
                    href="https://andreschoque.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Andres-choque-website-link"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </div>
            </div>
          )} */}

          <div className="button-container">
            {!showMore && (
              <a href="https://github.com/khaled-ziane" target="_blank">
                <button
                  className="btn"
                  id="view-more"
                  aria-label="View-more-button"
                  // onClick={handleViewMore}
                >
                  View more
                </button>
              </a>
            )}
            {/* {showMore && (
              <button
                className="btn"
                id="hide"
                aria-label="Hide-button"
                onClick={handleHide}
              >
                Hide
              </button>
            )} */}
          </div>
        </div>
      </div>

      <div className="contact-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-l">
              <h1 className="sub-header">Let's Connect</h1>
              <p>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />{" "}
                k.ziane2021@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> 06 98 67 47 54
              </p>
              <p>
                <FontAwesomeIcon icon={faWhatsapp} /> +213 698 67 47 54
              </p>
              {/* <div className="social">
                <a
                  href="https://www.instagram.com/andres.choque23/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Andres-choque-instagram-account"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com/in/andreschoque23/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Andres-choque-linkedin-account"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/andreschoque3"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Andres-choque-github-account"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div> */}
            </div>

            {/* <div className="contact-r">
              <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="Name" required />
                <input type="email" name="Email" placeholder="Email" required />
                <textarea
                  name="Message"
                  id=""
                  rows="6"
                  placeholder="Message"
                ></textarea>
                <button type="submit" className="btn btncv">
                  Submit
                </button>
              </form>
              <span id="submit-msg"></span>
            </div> */}
          </div>
        </div>

        <div className="copyright">
          <p>©️ 2024 Made by Khaled Ziane.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
