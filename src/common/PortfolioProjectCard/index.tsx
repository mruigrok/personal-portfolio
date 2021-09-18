import React from 'react';
import './style.css';

/**
 * @param link the external link for the project
 * @param image the project image for the card
 * @param cardText the project desciption to go over the image
 */
export interface PortfolioProjectCardProps {
  link: string;
  image: string;
  cardText: string;
}

/**
 * React component for the Portfolio project card. It returns a clickable image
 * with text overtop.
 * @param props  PortfolioProjectCardProps
 * @returns JSX.Element
 */
const PortfolioProjectCard: React.FC<PortfolioProjectCardProps> = (props): JSX.Element => (
  <a href={props.link} className="portfolio-item">
    <div className="portfolio-img-text">
      <img src={props.image} alt="" className="portfolio-img" />
      <div className="portfolio-text">
        {props.cardText}
      </div>
    </div>
  </a>
);

export default PortfolioProjectCard;
