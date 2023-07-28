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
            Plongez dans mon parcours professionnel à travers cette timeline
            captivante ! Cette représentation visuelle vous permettra de
            découvrir les moments clés depuis mes débuts jusqu'à mes
            réalisations les plus récentes. C'est avec plaisir que je répondrai
            à vos{' '}
            <Link to={'/contact'} className="text-link hover:underline">
              questions et discuterai
            </Link>{' '}
            de nos éventuelles collaborations futures.
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
