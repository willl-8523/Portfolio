import React from 'react';
import { Link } from 'react-router-dom';

const TimelineContent = ({
  debut,
  fin,
  annee,
  label,
  ecole = null,
  lien = null,
  description = null,
  certification = null,
  icon,
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content items-start text-left bg-white rounded-md shadow-shadow-card flex flex-col p-3.5 relative w-97">
        <time className="bg-davy-grey text-main-color text-xs p-1 mt-2 mb-3 rounded-sm flex">
          <i className="pt-0.5 bx bxs-calendar mr-1"></i> {debut} - {fin} <br />{' '}
          {annee}
        </time>

        <h3 className="p-1 mb-2 font-extrabold flex">
          <i className={`pt-1 bx bx-${icon} mr-1`}></i>
          {label}
        </h3>
        {ecole && (
          <>
            <h4 className="p-1 mb-2 text-base flex">
              <i className="pt-1 bx bxs-school mr-1"></i>{' '}
              <Link
                className="hover:text-link hover:underline"
                to={lien}
                target="_blank"
              >
                {ecole}
              </Link>
            </h4>
            {certification && (
              <Link
                className="arrow p-1 mb-2 text-sm font-semibold hover:underline"
                to={certification}
                target="_blank"
              >
                View certification{' '}
              </Link>
            )}
          </>
        )}
        <p className="p-1 mb-2 italic">{description}</p>
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineContent;
