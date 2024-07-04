import React from 'react';
import LinkFooter from './Link-footer.component';

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="text-davy-grey">
      <ul className="list-none my-1 text-lg">
        <LinkFooter link="https://github.com/willl-8523" icon={'github'} />
        <LinkFooter
          link="https://www.linkedin.com/in/wilfried-mbenock-482935180/"
          icon={'linkedin'}
        />
        <LinkFooter
          link="https://web.skype.com/?openPstnPage=true"
          icon={'skype'}
        />
        <LinkFooter link="https://twitter.com/M_Wilfried237" icon={'twitter'} />
      </ul>
      <p>Copyright @ {year}</p>
    </footer>
  );
};

export default Footer;
