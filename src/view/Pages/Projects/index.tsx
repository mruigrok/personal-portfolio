import React from 'react';
import './style.css';

import NavHamburger, { NavHamburgerProps } from '../../../common/NavHamburger';
import PageFooter from '../../../common/PageFooter';
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

const ProjectsPage = (): JSX.Element => {
  useAutoScroll();
  return (
    <>
      <header className="home-header">
        <NavHamburger navItems={NavBarItems.navItems} />
      </header>
      <div className="nothing-here"> Come back later :)</div>
      {/** Add footer to the page */}
      <PageFooter />

    </>
  );
};

export default ProjectsPage;
