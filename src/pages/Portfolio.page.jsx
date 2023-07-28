import React from 'react';
import portfolioData from '../data/portfolioData';
import PortfolioComponent from '../components/portfolio/Portfolio.component';
import NoteBook from '../assets/logo_competences/notebook.png';

const Portfolio = () => {
  return (
    <div className="my-6 px-5 max-w-6xl w-full ">
      <div className="min-h-screen">
        <div className="portfolioHeader max-w-full basis-full flex-flex-xs-12 px-2 py-5 text-center text-very-dark-gray">
          <h1 className="text-32px font-black uppercase tracking-widest my-2.5 relative">
            <img
              src={NoteBook}
              className="w-[3%] h-[3%] pb-1.5 inline-block"
              alt="graduation-cap-img"
            />{' '}
            Portfolio
          </h1>
          <p className="leading-7 tracking-wider font-light text-sm">
            Bienvenue dans mon portfolio artistique ! À travers cette collection
            d'œuvres, je vous invite à explorer mon univers. Chaque projet
            présenté ici est le fruit d'un engagement profond, et j'espère
            qu'ils vous captiveront autant qu'ils m'ont inspiré à les
            développer. Que cette visite vous offre un aperçu de ma vision et
            suscite en vous une connexion avec mon travail.
          </p>
        </div>
        <div className="mt-9 flex flex-row flex-wrap">
          {portfolioData.map((data) => {
            const { image, img_desc, nom, description, technos, vue } = data;
            return (
              <PortfolioComponent
                key={data.id}
                image={image}
                img_desc={img_desc}
                nom={nom}
                description={description}
                technos={technos}
                vue={vue}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
