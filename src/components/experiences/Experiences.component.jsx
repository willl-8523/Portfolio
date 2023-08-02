import React from 'react';
import { Link } from 'react-router-dom';
import TimelineContent from '../formations/TimelineContent.component';
import '../formations/formation.style.css';
import experiencesData from '../../data/experiencesData';
import Graduation from '../../assets/logo_competences/briefcase.png';

const FormationsComponent = () => {
  return (
    <div className="my-6 px-5 max-w-6xl w-full">
      <div className="flex flex-wrap flex-row min-h-screen">
        <div className="experienceHeader max-w-full basis-full flex-flex-xs-12 px-2 py-5 text-center text-very-dark-gray">
          <h1 className="text-32px font-black uppercase tracking-widest my-2.5 relative">
            <img
              src={Graduation}
              className="w-[3%] h-[3%] pb-1.5 inline-block"
              alt="graduation-cap-img"
            />{' '}
            Experiences
          </h1>
          <p className="leading-7 tracking-wider font-light text-sm">
            Dive into my professional journey through this captivating timeline!
            This visual representation will allow you to explore key moments
            from my beginnings to my most recent accomplishments. I'm delighted
            to answer your <Link to={'/contact'} className="text-link hover:underline">questions and discuss</Link> potential future collaborations.
          </p>
          <div className="timeline-container">
            {experiencesData.map((data) => {
              const { debut, fin, annee, label, ecole, description, icon } =
                data;
              return (
                <TimelineContent
                  key={data.id}
                  debut={debut}
                  fin={fin}
                  annee={annee}
                  label={label}
                  ecole={ecole}
                  description={description}
                  icon={icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationsComponent;
