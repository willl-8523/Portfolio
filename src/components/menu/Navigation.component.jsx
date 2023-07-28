import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarContext } from '../../contexts/Sidebar.context';
import LinkNav from './Link-nav.component';

const Navigation = () => {
  const [currentRoute, setCurrentRoute] = useState();
  const { isShowed, setIsShowed } = useContext(SidebarContext);

  // Récuperer le path
  const location = useLocation();
  const linkRoute = location.pathname;
  const pathRoute = linkRoute.slice(1, linkRoute.length).toLowerCase();

  useEffect(() => {
    setCurrentRoute(pathRoute);
  }, [pathRoute]);

  const handleClick = () => {
    setCurrentRoute(pathRoute);
    setIsShowed(!isShowed);
  };

  return (
    <section>
      <ul className="list-none p-0 my-1">
        <LinkNav
          onClick={handleClick}
          name="Formations"
          path="/formations"
          addClass={currentRoute === 'formations' ? 'text-red-color' : ''}
        />
        <LinkNav
          onClick={handleClick}
          name="Compétences"
          path="/competences"
          addClass={currentRoute === 'competences' ? 'text-red-color' : ''}
        />
        <LinkNav
          onClick={handleClick}
          name="Experiences"
          path={'/experiences'}
          addClass={currentRoute === 'experiences' ? 'text-red-color' : ''}
        />
        <LinkNav
          onClick={handleClick}
          name="Portfolio"
          path="/portfolio"
          addClass={currentRoute === 'portfolio' ? 'text-red-color' : ''}
        />
        <LinkNav
          onClick={handleClick}
          name="Contact"
          path="/contact"
          addClass={currentRoute === 'contact' ? 'text-red-color' : ''}
        />
      </ul>
    </section>
  );
};

export default Navigation;
