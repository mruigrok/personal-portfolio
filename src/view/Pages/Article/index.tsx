import React from 'react';
import './style.css';

import NavHamburger, { NavHamburgerProps } from '../../../common/NavHamburger';
import PageFooter from '../../../common/PageFooter';
import ArticleEntry from '../../../common/ArticleEntry';
import { useAutoScroll } from '../../hooks';

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

const ArticlePage = (): JSX.Element => {
  useAutoScroll();
  return (
    <>
      <header className="article-header">
        <NavHamburger navItems={NavBarItems.navItems} />
      </header>
      {/* Author info at the top and article details */}
      <ArticleEntry />
      {/** Add footer to the page */}
      <PageFooter />
    </>
  );
};

export default ArticlePage;
