import React, { useEffect, useState } from 'react';
import {
  backEnd,
  baseDeDonnee,
  frontEnd,
  gestionProjet,
  maquettage,
} from '../data/competencesData';
import ButtonNav from '../components/competences/ButtonNav.component';
import CompetenceCard from '../components/competences/CompetenceCard.component';
import Graduation from '../assets/logo_competences/laptop-code.png';

const Competences = () => {
  const [competencesList, setCompetencesList] = useState();
  const [activeButton, setActiveButton] = useState('front_end');

  useEffect(() => {
    const categoryData = {
      front_end: frontEnd[0].tehno,
      back_end: backEnd[0].tehno,
      base_de_donnees: baseDeDonnee[0].tehno,
      gestion_projet: gestionProjet[0].tehno,
      maquettage: maquettage[0].tehno,
    };

    setCompetencesList(categoryData[activeButton] || []);
  }, [activeButton]);

  const handleClick = ({ currentTarget }) => {
    setActiveButton(currentTarget.name);
  };

  return (
    <div className="my-6 px-5 max-w-6xl w-full">
      <div className="min-h-screen">
        <div className="competenceHeader max-w-full basis-full flex-flex-xs-12 px-2 py-5 text-center text-very-dark-gray">
          <h1 className="text-32px font-black uppercase tracking-widest my-2.5 relative">
            <img
              src={Graduation}
              className="w-[5%] h-[5%] pb-0.5 inline-block"
              alt="graduation-cap-img"
            />{' '}
            Skills
          </h1>
          <p className="leading-7 tracking-wider font-light text-sm">
            As a passionate web developer, I am eager to take on challenges by
            creating modern and aesthetically appealing interfaces while
            ensuring a seamless user experience. Additionally, I am prepared to
            design and develop complete web applications (from wireframing to
            front-end and back-end) that are scalable and tailored to specific
            needs. Discover my skillset in web development.
          </p>
        </div>
        <div className="w-full px-2 mt-9">
          <nav>
            <ul className="navButton flex flex-wrap justify-center gap-5 w-4/5 mx-auto">
              <ButtonNav
                name="front_end"
                activeButton={activeButton}
                onClick={handleClick}
                label="Front-End"
              />
              <ButtonNav
                name="back_end"
                activeButton={activeButton}
                onClick={handleClick}
                label="Back-End"
              />
              <ButtonNav
                name="base_de_donnees"
                activeButton={activeButton}
                onClick={handleClick}
                label="Database"
              />
              <ButtonNav
                name="gestion_projet"
                activeButton={activeButton}
                onClick={handleClick}
                label="Project Management"
              />
              <ButtonNav
                name="maquettage"
                activeButton={activeButton}
                onClick={handleClick}
                label="Design"
              />
            </ul>
          </nav>
          <div className="competence-list p-6 mt-6 flex flex-wrap justify-center items-center gap-5 text-center">
            {competencesList &&
              competencesList.map((competence) => {
                const { id, image, titre } = competence;
                return (
                  <CompetenceCard
                    key={id}
                    image={image.default}
                    alt={`${titre}_img`}
                    titre={titre}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
