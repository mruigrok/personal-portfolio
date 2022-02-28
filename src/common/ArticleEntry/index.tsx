import React from 'react';
import './style.css';

import randomImg from '../../images/supercharger.jpg';
import headshotImg from '../../images/headshot.jpg';
import TextDot from '../TextDot';

/** Base props for an article React component */
export interface ArticleBaseProps {
  image: string;
  articleTitle: string;
  articleDesc: string;
  href: string;
  date?: string;
  year?: number;
  timeToRead?: number;
  articleType?: string;
}

/*
expxort interface ArticleProps extends ArticleBaseProps {
  articleHTML: string;
}
*/

const Article = (): JSX.Element => {
  return (
    <>
      {/* Author info at the top and article details */}
      <div className="article-info-block">
        <div className="info-block">
          <img className="author-img" src={headshotImg} alt="" />
        </div>
        <div className="info-block">
          { 'Jan 20' }
          <TextDot />
        </div>
        <div className="info-block">
          { `${6} min read` }
          <TextDot />
        </div>
        <div className="info-block">
          { 'Apps' }
        </div>
      </div>
      <div className="article">
        <h3 className="article-title">
          <b> 3D Printed Rotary Engine </b>
        </h3>
        <p className="article-desc">
          Somehow it is less reliable than the real thing...
        </p>
        {/* Throw the image in here */}
        <img className="article-img" src={randomImg} alt="" />
        <div className="article-content">
          yo
        </div>
      </div>
    </>
  );
};

export default Article;
