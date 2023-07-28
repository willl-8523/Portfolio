import React from 'react';

const Service = ({lienImg, descriptionImg, titreService, descriptionService}) => {
  return (
    <div className="w-1/3 my-7 px-2">
      <img
        className="mx-auto max-w-full"
        src={lienImg}
        alt={descriptionImg}
      />
      <h4 className="services-title my-2.5">{titreService}</h4>
      <small className='service-description'>
        {descriptionService}
      </small>
    </div>
  );
};

export default Service;
