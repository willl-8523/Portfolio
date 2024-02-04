import React from 'react';

const HeaderHome = () => {
  return (
    <header className="header-home-content py-36 bg-banner-img bg-no-repeat bg-cover bg-center -mx-2">
      <section className="text-white text-center leading-9 max-w-60 mx-auto tracking-widest">
        <h5 className="uppercase text-center">Ngo Mbenock Wilfried</h5>
        <h1
          id="title"
          className="uppercase font-black text-32px pb-2.5 my-2.5 leading-10"
        >
          WEB DEVELOPER <br />
          <span className="normal-case mx-2">ReactJS and NextJS</span>
        </h1>
      </section>
    </header>
  );
};

export default HeaderHome;
