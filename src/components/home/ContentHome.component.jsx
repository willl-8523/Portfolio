import React from 'react';
import './contentHome.css';
import { Link } from 'react-router-dom';
import Service from './Service.component';

const ContentHome = () => {
  return (
    <main className="max-w-6xl w-full my-16 mx-auto">
      <section className="flex flex-row flex-wrap items-center">
        <h3 className="title-content-home max-w-25 w-1/4 my-7 px-2 font-semibold text-base uppercase">
          Comment tout à commencer
        </h3>
        <p className="description-content-home max-w-75 w-3/4 my-7 px-2 text-very-dark-gray">
          Tout a commencé en 2013 lorsqu'un bon ami m'a initié au développement
          web.
          <br />
          <br /> Nous avons commencé à apprendre sur le{' '}
          <span className="text-link">siteDuZero</span> devenu
          <Link
            to="https://openclassrooms.com/fr/"
            target="_blank"
            className="text-link hover:underline"
          >
            {' '}
            Openclassroom{' '}
          </Link>
          le HTML, et peu de temps après je me suis mis au CSS, à ce moment-là
          j'ai été époustouflé par sa puissance !<br />
          <br /> J'ai commencé à apprendre jQuery pour m'améliorer mais après un
          certain temps, réalisant que jQuery est construit au-dessus de
          JavaScript, je l'ai laissé tomber et j'ai commencé à apprendre Vanilla
          JS, et quand j'ai senti que je comprenais ce qui se passait sous le
          capot, j'ai choisi ReactJS pour m'aider à long terme sur le front-end.
          <br />
          <br />
          J'ai également ajouté NodeJS, PHP et son Framework Symfony à ma
          palette de compétences afin de pouvoir fournir des services Full-Stack
          JavaScript :)
        </p>
      </section>
      <section className="flex flex-row flex-wrap items-center">
        <h3 className="title-content-home max-w-25 w-1/4 my-7 px-2 font-semibold text-base uppercase">
          Fournir des services
        </h3>
        <p className="description-content-home max-w-75 w-3/4 my-7 px-2 text-very-dark-gray">
          Comme mentionné ci-dessus, je suis spécialisé en HTML/CSS, JavaScript
          et la librairie ReactJS <br /> sur le frontend, mais je suis aussi
          assez à l'aise en PHP <br />
          et à son Framework Symfony pour le back-end. <br />
          <br />
          Pour plus de détails sur mes projets réalisés, consultez mon portfolio
          ainsi que mon profil{' '}
          <Link
            to="https://www.malt.fr/profile/wilfriedmbenock"
            target="_blank"
            className="text-link hover:underline"
          >
            Malt
          </Link>{' '}
          . <br />
          <br />
          Consultez la chronologie pour un aperçu de mes progrès et de mes
          réalisations jusqu'à présent. <br />
          <br />
          Prenez contact avec moi et nous ferons passer votre site web au niveau
          supérieur !
        </p>
      </section>
      <section className="services flex flex-row flex-wrap text-center text-very-dark-gray">
        <Service
          lienImg={require('../../assets/web_dev.png')}
          descriptionImg="desktop_img"
          titreService="Developpement web"
          descriptionService="HTML, CSS(Bootstrap, Tailwind), JavaScript(ReactJS) pour le
            Front-end et NodeJS, PHP(Symfony) pour le Back-end ? tout ce que
            vous voulez, je m'en occupe."
        />
        <Service
          lienImg={require('../../assets/responsive_design.png')}
          descriptionImg="responsive_design_img"
          titreService="Responsive"
          descriptionService="En 2023, vous ne pouvez pas aller en ligne sans avoir un site web
            adapté aux mobiles. Laissez-moi m'en occuper pour vous."
        />
        <Service
          lienImg={require('../../assets/design_to_html.png')}
          descriptionImg="design_to_html_img"
          titreService="Maquette en HTML"
          descriptionService="Avez-vous un joli dessin en figma ou en photoshop ? Contactez-moi et
            je les convertirai en sites Web entièrement réactifs et attrayants."
        />
      </section>
    </main>
  );
};

export default ContentHome;
