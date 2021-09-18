import React from 'react';
import './style.css';

/**
 * Props for the social list item component.
 * @param link the URL endpoint
 * @param icon the fa icon
 */
interface SocialListItemProps {
  link: string;
  icon: string;
}

/**
 * React component for the page footer. Has email and social contacts.
 * @returns JSX.Element
 */
const PageFooter = (): JSX.Element => {
  /** A Social List item. External link and font-awesome icon are the props. */
  const SocialListItem: React.FC<SocialListItemProps> = (props) => (
    <li className="social-list-item">
      <a className="social-list-link" href={props.link}>
        <i className={props.icon} />
      </a>
    </li>
  );

  /** The items to add to the social list in the footer. */
  const SocialList: SocialListItemProps[] = [
    {
      link: 'https://www.linkedin.com/in/matthewruigrok/',
      icon: 'fab fa-linkedin',
    },
    {
      link: 'https://github.com/mruigrok',
      icon: 'fab fa-github',
    },
    {
      link: 'https://twitter.com',
      icon: 'fab fa-twitter',
    },
  ];

  /** Create an array of the SocialListItems to put in the list */
  const SocialListItems = SocialList.map((item) => (
    <SocialListItem key={item.link} link={item.link} icon={item.icon} />
  ));

  return (
    <>
      <div className="footer">
        <a href="mailto:mruigrok6@gmail.com" className="email-link">mruigrok6@gmail.com</a>
        <ul className="social-contact-list">
          { SocialListItems }
        </ul>
      </div>
    </>
  );
};

export default PageFooter;
