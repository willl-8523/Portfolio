import React from 'react';
import { Link } from 'react-router-dom';
import Service from './Service.component';

const ContentHome = () => {
  return (
    <main className="max-w-6xl w-full my-16 mx-auto">
      <section className="flex flex-row flex-wrap items-center">
        <h3 className="title-content-home max-w-25 w-1/4 my-7 px-2 font-semibold text-base uppercase">
          How It All Started
        </h3>
        <p className="description-content-home max-w-75 w-3/4 my-7 px-2 text-very-dark-gray">
          It all started in 2013 when a good friend introduced me to web
          development. <br />
          <br /> We began learning HTML on the{' '}
          <span className="text-link">siteDuZero</span>, which later became
          <Link
            to="https://openclassrooms.com/fr/"
            target="_blank"
            className="text-link hover:underline"
          >
            {' '}
            Openclassroom.
          </Link>
          Shortly after, I delved into CSS, and I was amazed by its power at
          that moment!
          <br />
          <br /> I started learning jQuery to improve my skills, but after a
          while, I realized that jQuery is built on top of JavaScript. So, I
          dropped it and began learning Vanilla JS. Once I felt I understood
          what was happening under the hood, I chose ReactJS to empower my
          frontend skills for the long term.
          <br />
          <br />I also added NodeJS, PHP, Symfony and NextJS to my skill
          set, enabling me to provide Full-Stack JavaScript services 😀.
        </p>
      </section>
      <section className="flex flex-row flex-wrap items-center">
        <h3 className="title-content-home max-w-25 w-1/4 my-7 px-2 font-semibold text-base uppercase">
          Providing Services
        </h3>
        <p className="description-content-home max-w-75 w-3/4 my-7 px-2 text-very-dark-gray">
          As mentioned above, I specialize in HTML/CSS, JavaScript, and the
          ReactJS library for the frontend. Additionally, I am proficient in Symfony or NextJS Framework for the backend.
          <br />
          <br />
          For more details about the projects I have worked on, please refer to
          my portfolio and my{' '}
          <Link
            to="https://www.malt.fr/profile/wilfriedmbenock"
            target="_blank"
            className="text-link hover:underline"
          >
            Malt profile.
          </Link>{' '}
          <br />
          <br />
          You can check out the timeline for an overview of my progress and
          achievements so far.
          <br />
          <br />
          Feel free to get in touch with me, and together we will take your
          website to the next level!
        </p>
      </section>
      <section className="services flex flex-row flex-wrap text-center text-very-dark-gray">
        <Service
          lienImg={require('../../assets/web_dev.png')}
          descriptionImg="desktop_img"
          titreService="Web development"
          descriptionService="HTML, CSS (Bootstrap, Tailwind), JavaScript (ReactJS) for the frontend, and NodeJS (NextJS), PHP (Symfony) for the backend? I can handle it all."
        />
        <Service
          lienImg={require('../../assets/responsive_design.png')}
          descriptionImg="responsive_design_img"
          titreService="Responsive"
          descriptionService="In 2023, you can't go online without having a mobile-responsive website. Let me take care of it for you."
        />
        <Service
          lienImg={require('../../assets/design_to_html.png')}
          descriptionImg="design_to_html_img"
          titreService="Maquette en HTML"
          descriptionService="Do you have any beautiful designs in Figma or Photoshop? Contact me, and I'll turn them into fully responsive and appealing websites."
        />
      </section>
    </main>
  );
};

export default ContentHome;
