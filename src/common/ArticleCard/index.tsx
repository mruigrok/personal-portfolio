import React from 'react';
import './style.css';

import { ArticleBaseProps } from '../ArticleEntry';
import TextDot from '../TextDot';

/** Extend to incude an option to display article or not */
export interface ArticleCardProps extends ArticleBaseProps {
  displayCard: boolean;
}

/**
 * React component for the article card. It returns a card outlining the article with a title,
 * description and image.
 *
 * @param props ArticleCardProps
 * @returns JSX.Element
 */
const ArticleCard: React.FC<ArticleBaseProps> = (props): JSX.Element => (
  <a className="article-card-link" href={props.href}>
    <div className="article-card">
      <div className="article-text">
        <h3 className="article-title">
          {props.articleTitle}
        </h3>
        <p className="article-desc">
          {props.articleDesc}
        </p>
        <div className="article-info">
          <div className="info-block">
            { props.date || '' }
            { props.date && <TextDot /> }
          </div>
          <div className="info-block">
            { props.timeToRead ? `${props.timeToRead} min read` : '' }
            { props.timeToRead && <TextDot /> }
          </div>
          <div className="info-block">
            { props.articleType || 'Apps' }
          </div>
        </div>
      </div>
      <div className="article-card-img-div">
        <img src={props.image} alt="" className="article-card-img" />
      </div>
    </div>
  </a>
);

export default ArticleCard;
