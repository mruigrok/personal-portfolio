import React from 'react';
import './style.css';

import PageFooter from '../../../common/PageFooter';
import NavHamburger, { NavHamburgerProps } from '../../../common/NavHamburger';
import resume from '../../../resume/mnr-resume.pdf';
import aboutMeImg from '../../../images/code.jpg';
import headshotImg from '../../../images/headshot.jpg';
import cityImg from '../../../images/city-01.jpg';
import monitorImg from '../../../images/monitor-04.jpg';
import laptopImg from '../../../images/laptop-01.jpg';
import laptopImgTwo from '../../../images/laptop-03.jpg';
import rotaryImg from '../../../images/rotary-03.jpg';
import weldingImg from '../../../images/welding-01.jpg';
import PortfolioProjectCard, { PortfolioProjectCardProps } from '../../../common/PortfolioProjectCard';
import ProjectBlurb, { ProjectBlurbProps } from '../../../common/ProjectBlurb';
import { useAutoScroll } from '../../hooks';

/** Navigation bar items */
const NavBarItems: NavHamburgerProps = {
  navItems: [
    {
      link: '#/#home',
      text: 'Home',
    },
    {
      link: '#/#projects',
      text: 'Projects',
    },
    {
      link: '#/#about',
      text: 'About',
    },
    {
      link: '#/#work',
      text: 'Portfolio',
    },
  ],
};

/** Content for each of the project blurbs */
const ProjectBlurbItems: ProjectBlurbProps [] = [
  {
    title: 'Smart Response',
    description: 'Smart Response is an app made to minimize the overhead time notifying first responders when there has beenca potentially life-threatening incident. The app connects to the cityIQ nodes located in Hamilton, Ontario and receives real-time audio and video data to determine if an incident has occured. If it has, the app then geotags the location of the incident with a live image so first responders can determine what actions to take next.',
  },
  {
    title: 'Parnas Pacemaker',
    description: 'Parnas Pacemaker is a mock pacemaker that is capable of inhibiting and delivering rate adpative pulses to the atrium and ventricle in up to 10 different modes. The microcontroller was programmed using Matlab and Simulink to deliver pulses according to a specific mode provided by the user. A GUI was built using Node.js to allow the user to input and store personalized settings and interface with the microcontroller.',
  },
  {
    title: 'GraphDB',
    description: 'Graph DB is an investigation into graph databases that was carried out along with another colleage. The resulting project enables the user to create graphs, which include unique nodes and relationships as well as save and reproduce their previously created graphs. Along the way, some basic graph searching algorithms such as DFS and BFS were investigated and implemented.',
  },
];

/** Array of Project Blurb components */
const ProjectBlurbs = ProjectBlurbItems.map((item) => (
  <ProjectBlurb key={item.title} title={item.title} description={item.description} />
));

/** Content for each of the portfolio project cards. */
const PortfolioProjectCardItems: PortfolioProjectCardProps[] = [
  {
    link: 'https://github.com/mruigrok/smartResponse',
    image: cityImg,
    cardText: 'Smart Response',
  },
  {
    link: 'https://github.com/mruigrok/ParnasPacemaker',
    image: monitorImg,
    cardText: 'Parnas Pacemaker',
  },
  {
    link: 'https://github.com/redha1419/graphDB',
    image: laptopImg,
    cardText: 'GraphDB',
  },
  {
    link: 'https://github.com/mruigrok/self-driving-car',
    image: laptopImgTwo,
    cardText: 'Python AV Simulation',
  },
  {
    link: '#/projects',
    image: weldingImg,
    cardText: 'Metal and Wood Projects',
  },
  {
    link: '#/projects',
    image: rotaryImg,
    cardText: '3D Printed Rotary Engine',
  },
];

/** Array of Portfolio Project Card components */
const PortfolioProjectCards = PortfolioProjectCardItems.map((item) => (
  <PortfolioProjectCard
    key={item.image}
    link={item.link}
    image={item.image}
    cardText={item.cardText}
  />
));

const HomePage = (): JSX.Element => {
  useAutoScroll();
  return (
    <>
      <header className="home-header">
        <NavHamburger navItems={NavBarItems.navItems} />
      </header>

      {/** Intro Section */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am
          <strong> Matthew Ruigrok </strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro"> Mechatronics Engineering @ McMaster University </p>
        <img src={headshotImg} alt="" className="intro__img" />
      </section>

      {/** Project Section */}
      <section className="my-projects" id="projects">
        <h2 className="section__title section__title--projects"> Projects </h2>
        <div className="projects">
          {ProjectBlurbs}
        </div>
        <a href="#/#work" className="btn"> More Projects </a>
      </section>

      {/** About Me Section */}
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about"> About Me </h2>
        <p className="section__subtitle section__subtitle--about" />
        <div className="about-me__body">
          <p>
            I am a fourth year student at
            <strong> McMaster University </strong>
            currently pursuing a Bachelor of Engineering in Mechatronics.
            Outside of school I enjoy playing a variety of sports (hockey and soccer are my
            favourites) as well as working with my hands.I am a hobbyist metal fabricator and
            wood worker and have created a variety of rustic furniture pieces. I have previous
            internship experience at AWS and Stellantis (formerly FCA) and my expected
            graduation date is
            <strong> December 2021 </strong>
            . I will be seeking full-time employment post-graduation.
          </p>
          <div className="resume">
            <a className="resume-link" href={resume} target="_blank" rel="noreferrer"><p> Get Resume </p></a>
          </div>
        </div>
        <img src={aboutMeImg} alt="" className="about-me__img" />
      </section>

      {/** Portfolio Section */}
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work"> Portfolio </h2>
        <p className="section__subtitle section__subtitle--work" />
        <div className="portfolio">
          { PortfolioProjectCards }
        </div>
      </section>

      {/** Add footer to the page */}
      <PageFooter />
    </>
  );
};

export default HomePage;
