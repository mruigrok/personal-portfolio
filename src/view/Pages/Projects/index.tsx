import React from 'react';
import './style.css';

import NavHamburger, { NavHamburgerProps } from '../../../common/NavHamburger';
import PageFooter from '../../../common/PageFooter';
import ArticleCard, { ArticleCardProps } from '../../../common/ArticleCard';
import { useAutoScroll } from '../../hooks';
import weldingImg from '../../../images/welding-01.jpg';
import rotaryImg from '../../../images/rotary-03.jpg';
import cityImg from '../../../images/city-01.jpg';
import plumbingImg from '../../../images/plumbing.jpg';

/** Navigation bar items */
const NavBarItems: NavHamburgerProps = {
  navItems: [
    {
      link: '#/',
      text: 'Home',
    },
    {
      link: '#/#projects',
      text: 'Projects',
    },
  ],
};

/** The article entries to display */
// TODO:
// Add real date object and sort by most recent
// Sort by article type, most viewed etc. (down the road)

const ArticleListItems: ArticleCardProps[] = [
  {
    image: rotaryImg,
    articleTitle: '3D Printed Rotary Engine',
    articleDesc: 'Somehow it\'s less reliable than the real thing...',
    articleType: 'Projects',
    href: '#/projects/3',
    date: 'Jan 20',
    timeToRead: 6,
    displayCard: true,
  },
  {
    image: weldingImg,
    articleTitle: 'Inept welder for hire!',
    articleDesc: 'My journey to becoming a mediocre metalworker, as told with examples of my past and present works',
    articleType: 'Projects',
    href: '#/',
    timeToRead: 3,
    displayCard: true,
  },
  {
    image: cityImg,
    articleTitle: 'A Search Engine That Finds You Weird Old Books',
    articleDesc: 'To help “rewild your attention” I built a book-finding app',
    articleType: 'Personal',
    href: '#/',
    displayCard: true,
  },
  {
    image: plumbingImg,
    articleTitle: 'UV Light Installation',
    articleDesc: 'Featuring plumbing skills I haven\'t used since high school',
    articleType: 'Projects',
    href: '#/',
    date: 'Feb 16',
    timeToRead: 5,
    displayCard: true,
  },
  {
    image: plumbingImg,
    articleTitle: '3D Printed Robot Arm',
    articleDesc: 'Using open source CAD files and my own control code',
    articleType: 'Projects',
    href: '#/',
    date: 'Feb 17',
    timeToRead: 10,
    displayCard: false,
  },
];

const ArticleList = ArticleListItems.filter((item) => item.displayCard).map((item) => (
  <ArticleCard
    key={item.articleTitle}
    image={item.image}
    articleTitle={item.articleTitle}
    articleDesc={item.articleDesc}
    articleType={item.articleType}
    href={item.href}
    date={item.date}
    timeToRead={item.timeToRead}
  />
));

const ProjectsPage = (): JSX.Element => {
  useAutoScroll();
  return (
    <>
      <header className="home-header">
        <NavHamburger navItems={NavBarItems.navItems} />
      </header>
      <div className="article-list">
        {ArticleList}
      </div>
      {/** Add footer to the page */}
      <PageFooter />

    </>
  );
};

export default ProjectsPage;
