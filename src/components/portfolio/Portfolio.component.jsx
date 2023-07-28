import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.style.css';

const PortfolioComponent = ({
  image,
  img_desc,
  nom,
  description,
  technos,
  vue,
}) => {
  return (
    <div className="portfolioCard w-1/3">
      <div className="m-1 rounded overflow-hidden relative shadow-lg shadow-cyan-500/50">
        <img
          src={image}
          alt={img_desc}
          className="img-portfolio w-full h-64 object-cover"
        />
        <div className="description-portfolio flex flex-col justify-around bg-menuBg w-full h-full text-white p-2 text-center">
          <h1 className="text-lg font-bold tracking-wider">{nom}</h1>
          <p className="italic text-sm">{description}</p>
          <div className="my-3 flex flex-wrap gap-3 justify-center">
            {technos.map((technoData) => {
              const { id, techno, technoCol } = technoData;
              return (
                <div
                  key={id}
                  className={`p-1 text-10px flex justify-between items-center gap-1.5 rounded text-main-color ${technoCol}`}
                >
                  {techno.toUpperCase()}
                </div>
              );
            })}
          </div>
          <Link
            to={vue}
            className="text-center font-bold text-red-color p-1 text-sm hover:underline duration-300"
            target="_blank"
          >
            <i className="bx bxl-github"></i> {'>'} Code source
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
