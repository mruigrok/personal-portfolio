import React, { useEffect, useState } from 'react';
import './style.css';

/**
 * @param navItems array of navigation items, which each have a link and text.
 */
export interface NavHamburgerProps {
  navItems: { link: string, text: string }[];
}

/** The Navigation Hamburger component, with the navigation items you wish to display.
 * @param props NavHamburgerProps.
 */
const NavHamburger: React.FC<NavHamburgerProps> = (props): JSX.Element => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (!navOpen) {
      const button = document.getElementsByClassName('nav-toggle')[0] as HTMLElement;
      button.blur();
    }
  }, [navOpen]);

  const NavListItems = props.navItems.map((item) => {
    return (
      <li key={item.link} className="nav-item">
        <a href={item.link} className="nav-link" onClick={() => setNavOpen(!navOpen)}>
          {item.text}
        </a>
      </li>
    );
  });

  const HamburgerButton = (
    <button className="nav-toggle" aria-label="toggle navigation" type="button" onClick={() => { setNavOpen(!navOpen); }}>
      <span className="hamburger" />
    </button>
  );

  const NavBar = (
    <nav className="nav">
      <ul className="nav-list">
        {NavListItems}
      </ul>
    </nav>
  );

  return (
    <>
      {HamburgerButton}
      {navOpen && NavBar}
    </>
  );
};

export default NavHamburger;
