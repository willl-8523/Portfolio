import React from 'react';
import CV from '../../assets/CV_Mbenock_Wilfried.pdf';

const HeaderHome = () => {
  return (
    <header className="header-home-content py-36 bg-banner-img bg-no-repeat bg-cover bg-center -mx-2">
      <section className="text-white text-center leading-9 max-w-60 mx-auto tracking-widest">
        <h5 className="uppercase text-center">Ngo Mbenock Wilfried</h5>
        <h1 id="title" className="uppercase font-black text-32px pb-2.5 my-2.5">
          WEB DEVELOPER <br />
          <span className="normal-case mx-2">Symfony and ReactJS</span>
        </h1>
        <div className="animate-beating">
          <a
            href={CV}
            rel="noopener noreferrer" // Bonne pratique pour les liens ouverts dans un nouvel onglet
            target="_blank"
            className="animate-beating w-28 mx-auto flex justify-center gap-1 p-2.5 text-sm bg-davy-grey rounded-lg hover:bg-menuBg duration-300 "
          >
            CV PDF{' '}
            <img
              src={
                require('../../assets/logo_competences/download.svg').default
              }
              className="pt-0.5"
              alt="download-img"
            />
          </a>
        </div>
      </section>
    </header>
  );
};

export default HeaderHome;
