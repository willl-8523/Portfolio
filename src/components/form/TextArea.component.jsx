import React from 'react';

const TextArea = ({name, placeholder}) => {
  return (
    <textarea
      className="w-full outline-0 py-3 px-4 rounded-md text-very-dark-gray ring-1 ring-pink-300 ring-inset"
      name={name}
      placeholder={placeholder}
      required
    ></textarea>
  );
};

export default TextArea;
