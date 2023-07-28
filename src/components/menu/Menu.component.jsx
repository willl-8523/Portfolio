import React, { useContext } from 'react';
import imgProfil from '../../assets/photo_profil.png';
import Footer from './Footer.component';
import Header from './Header.component';
import Navigation from './Navigation.component';
import { SidebarContext } from '../../contexts/Sidebar.context';

const Menu = () => {
  const { isShowed, setIsShowed } = useContext(SidebarContext);

  const handleClick = () => {
    setIsShowed(!isShowed);
  };

  return (
    <>
      <button
        className="bg-menuBg border-0 rounded-full w-10 h-10 fixed top-3 left-3 text-center cursor-pointer tracking-wider z-50 hidden show"
        onClick={handleClick}
      >
        <span
          className={
            !isShowed
              ? `bg-white block h-0.5 w-5 my-1 mx-auto burger-menu`
              : `bg-white block h-0.5 w-5 my-1 mx-auto burger-menu line-top`
          }
        ></span>
        <span
          className={
            !isShowed
              ? `bg-white block h-0.5 w-5 my-1 mx-auto burger-menu`
              : `bg-white block h-0.5 w-5 my-1 mx-auto burger-menu line-bottom`
          }
        ></span>
      </button>
      <aside
        className={
          !isShowed
            ? `sidebarHide w-1/6 min-h-screen bg-transparent block z-10`
            : `sidebarShow w-1/6 min-h-screen bg-transparent block z-10`
        }
      >
        <div
          id="menu"
          className="w-1/6 text-center font-poppins text-white bg-menuBg min-h-screen py-9 px-2.5 fixed top-0 flex flex-col justify-between"
        >
          <Header
            imgProfil={imgProfil}
            firstName={'Wilfried'}
            lastName={'Ngo Mbenock'}
          />
          <Navigation />
          <Footer />
        </div>
      </aside>
    </>
  );
};

export default Menu;
