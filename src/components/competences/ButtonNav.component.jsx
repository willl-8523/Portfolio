import React from 'react';

const ButtonNav = ({ name, label, activeButton, onClick }) => {
  return (
    <button
      name={name}
      className={`p-3 text-sm border-2 border-davy-grey rounded text-davy-grey font-semibold hover:bg-davy-grey hover:text-white duration-300 ${
        activeButton === name ? 'bg-davy-grey text-white' : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonNav;
