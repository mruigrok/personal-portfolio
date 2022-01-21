import React from 'react';
import './style.css';

/**
 * @param title the title
 * @param description the description
 */
export interface ArticleCardProps {
  image: string;
  articleTitle: string;
  articleDesc: string;
  date?: Date;
  readTime?: number;
  href?: string;
}

const TextDot:React.FC = (): JSX.Element => (
  <span className="dot" />
);

/**
 * React component for the article card. It returns a card outlining the article with a title,
 * description and image.
 *
 * @param props ArticleCardProps
 * @returns JSX.Element
 */
const ArticleCard: React.FC<ArticleCardProps> = (props): JSX.Element => (
  <a className="article-card-link" href={props.href}>
    <div className="article-card">
      <div className="article-img-div">
        <img src={props.image} alt="" className="article-img" />
      </div>
      <div className="article-text">
        <h3 className="article-title">
          {props.articleTitle}
        </h3>
        <p className="article-desc">
          {props.articleDesc}
        </p>
        <div className="article-info">
          <div className="info-block">
            Jan 20
            <TextDot />
          </div>
          <div className="info-block">
            8 min read
            <TextDot />
          </div>
          <div className="info-block">
            Apps
          </div>
        </div>
      </div>
    </div>
  </a>
);

export default ArticleCard;
