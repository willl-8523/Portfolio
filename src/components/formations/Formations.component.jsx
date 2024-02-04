import React from 'react';
import { Link } from 'react-router-dom';
import Graduation from '../../assets/logo_competences/graduation-cap.png';
import formationsData from '../../data/formationsData';
import TimelineContent from './TimelineContent.component';
import './formation.style.css';

const FormationsComponent = () => {
  return (
    <div className="my-6 px-5 max-w-6xl w-full mx-auto">
      <div className="flex flex-wrap flex-row items-center min-h-screen">
        <div className="formationHeader max-w-full basis-full flex-flex-xs-12 px-2 py-5 text-center text-very-dark-gray">
          <h1 className="text-32px font-black uppercase tracking-widest my-2.5 relative">
            <img
              src={Graduation}
              className="w-[5%] h-[5%] pb-1 inline-block"
              alt="graduation-cap-img"
            />{' '}
            Credentials
          </h1>
          <p className="leading-7 tracking-wider font-light text-sm">
            Below is a timeline of the trainings and professional certifications
            I have completed. For more details, you can{' '}
            <Link
              to={'mailto:ngowilfried@gmail.com'}
              className="text-link hover:underline"
            >
              contact
            </Link>{' '}
            me.
          </p>
          <div className="timeline-container">
            {formationsData.map((data) => {
              const {
                debut,
                fin,
                annee,
                label,
                lien,
                ecole,
                description,
                certification,
                icon,
              } = data;
              return (
                <TimelineContent
                  key={data.id}
                  debut={debut}
                  fin={fin}
                  annee={annee}
                  label={label}
                  ecole={ecole}
                  lien={lien}
                  description={description}
                  certification={certification}
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
