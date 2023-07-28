import React from 'react';

const CompetenceCard = ({image, titre}) => {
    return (
      <div
        className="card px-3 py-4 border-1px rounded-2xl shadow-md hover:shadow-xl duration-300"
      >
        <img
          className="w-2/4 h-2/4 mx-auto"
          src={image}
          alt={titre}
        />
        <p className="pt-2">{titre}</p>
      </div>
    );
}
 
export default CompetenceCard;