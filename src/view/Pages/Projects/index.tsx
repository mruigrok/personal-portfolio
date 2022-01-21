import React from 'react';
import './style.css';

import NavHamburger, { NavHamburgerProps } from '../../../common/NavHamburger';
import PageFooter from '../../../common/PageFooter';
import ArticleCard, { ArticleCardProps } from '../../../common/ArticleCard';
import { useAutoScroll } from '../../hooks';
import monitorImg from '../../../images/monitor-04.jpg';
import rotaryImg from '../../../images/rotary-03.jpg';

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
    articleDesc: 'Somehow it is less reliable than the real thing...',
    href: '#/',
  },
  {
    image: monitorImg,
    articleTitle: 'A Search Engine That Finds You Weird Old Books',
    articleDesc: 'To help “rewild your attention” I built a book-finding app',
    href: '#/',
  },
];

const ArticleList = ArticleListItems.map((item) => (
  <ArticleCard
    key={item.articleTitle}
    image={item.image}
    articleTitle={item.articleTitle}
    articleDesc={item.articleDesc}
    href={item.href}
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
