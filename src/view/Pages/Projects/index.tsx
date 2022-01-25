import React from 'react';
import './style.css';

import NavHamburger, { NavHamburgerProps } from '../../../common/NavHamburger';
import PageFooter from '../../../common/PageFooter';
import ArticleCard, { ArticleCardProps } from '../../../common/ArticleCard';
import { useAutoScroll } from '../../hooks';
import weldingImg from '../../../images/welding-01.jpg';
import rotaryImg from '../../../images/rotary-03.jpg';
import cityImg from '../../../images/city-01.jpg';

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

const ArticleListItems: ArticleCardProps[] = [
  {
    image: rotaryImg,
    articleTitle: '3D Printed Rotary Engine',
    articleDesc: 'Somehow less reliable than the real thing...',
    articleType: 'Side Project',
    href: '#/',
    date: 'Jan 20',
    readTime: 6,
  },
  {
    image: weldingImg,
    articleTitle: 'Inept welder for hire! My journey to becoming a mediocre metalworker',
    articleDesc: 'Including a collection of my past and present works',
    href: '#/',
    articleType: 'Projects',
    readTime: 3,
  },
  {
    image: cityImg,
    articleTitle: 'A Search Engine That Finds You Weird Old Books',
    articleDesc: 'To help “rewild your attention” I built a book-finding app',
    href: '#/',
    articleType: 'Fun',
  },
];

const ArticleList = ArticleListItems.map((item) => (
  <ArticleCard
    key={item.articleTitle}
    image={item.image}
    articleTitle={item.articleTitle}
    articleDesc={item.articleDesc}
    articleType={item.articleType}
    href={item.href}
    date={item.date}
    readTime={item.readTime}
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
