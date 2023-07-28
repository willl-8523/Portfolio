import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../contexts/Sidebar.context';

const Header = ({ imgProfil, firstName, lastName }) => {
  const { isShowed, setIsShowed } = useContext(SidebarContext);

  const handleClick = () => {
    setIsShowed(!isShowed);
  };

  return (
    <header>
      <Link to="/">
        <img
          className="rounded-full bg-white w-28 h-28 object-cover mx-auto image-profil"
          src={imgProfil}
          alt={`avatar ${lastName}`}
          onClick={handleClick}
        />
      </Link>
      <h5 className="w-full font-semibold text-base uppercase tracking-2-px mt-4 mb-2.5">
        {lastName}
        <br />
        {firstName}
      </h5>
    </header>
  );
};

export default Header;
