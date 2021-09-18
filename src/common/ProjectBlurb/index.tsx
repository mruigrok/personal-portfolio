import React from 'react';
import './style.css';

/**
 * @param title the title
 * @param description the description
 */
export interface ProjectBlurbProps {
  title: string;
  description: string;
}

/**
 * React component for the project card. It returns a header with some descriptive text.
 * @param props  PortfolioProjectBlurbProps
 * @returns JSX.Element
 */
const ProjectBlurb: React.FC<ProjectBlurbProps> = (props): JSX.Element => (
  <div className="project-blurb">
    <h3>{props.title}</h3>
    <p>
      {props.description}
    </p>
  </div>
);

export default ProjectBlurb;
