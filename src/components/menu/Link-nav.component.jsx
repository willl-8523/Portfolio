import React from 'react';
import { Link } from 'react-router-dom';

const LinkNav = ({ name, path, addClass, onClick }) => {
  return (
    <>
      <li className="my-3.5">
        <Link
          onClick={onClick}
          className={`text-base uppercase tracking-2-px decoration-0 ${addClass} hover:text-red-color duration-300`}
          to={path}
        >
          {name}
        </Link>
      </li>
    </>
  );
};

export default LinkNav;
