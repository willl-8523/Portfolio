import React from 'react';

const Field = ({type, placeholder, name}) => {
  return (
    <input
      className="w-full outline-0 py-3 px-4 rounded-md text-very-dark-gray  ring-1 ring-pink-300 ring-inset"
      type={type}
      placeholder={placeholder}
      name={name}
      required
    />
  );
};

export default Field;
