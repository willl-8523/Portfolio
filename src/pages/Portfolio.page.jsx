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
            Projects
          </h1>
          <p className="leading-7 tracking-wider font-light text-sm">
            Welcome to my artistic portfolio! Through this collection of works,
            I invite you to explore my world. Each project presented here is the
            result of a profound commitment, and I hope they captivate you as
            much as they inspired me to develop them. May this visit offer you
            an insight into my vision and create a connection with my work.
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
