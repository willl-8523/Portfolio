import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Field from '../components/form/Field.component';
import TextArea from '../components/form/TextArea.component';

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef(null);

  const reCAPTCHA_KEY = process.env.REACT_APP_RECAPCHAT_KEY;

  const [captchaIsDone, setCaptchaIsDone] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (value) => {
    console.log('Captcha value:', value);
    setCaptchaIsDone(!captchaIsDone);
    setError(!error);
  };

  const handleClick = () => {
    !captchaIsDone ? setError(true) : setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log(result.text);

          // Réinitialisation de Recapchat
          if (recaptchaRef.current) {
            recaptchaRef.current.reset();
          }

          // Notification flash d'un succès
          toast.success(`Mail envoyé! 😃`);
        },
        (error) => {
          // console.log(error.text);
          toast.error(`Une erreur est survenue 😞`);
        }
      );
    e.target.reset();
  };

  return (
    <div className="my-6 max-w-6xl w-full px-5">
      <div className="flex flex-row flex-wrap py-5">
        <header className="contactHeader mb-6 text-center max-w-full basis-full text-very-dark-gray">
          <h1 className="my-3 text-32px font-bold tracking-wider uppercase">
            Un nouveau projet en tête ?
          </h1>
          <p className="leading-7 tracking-wider font-light text-sm">
            Je suis ouvert à de nouvelles opportunités professionnelles
            passionnantes ! Si vous souhaitez collaborer avec moi pour la
            réalisation d'une application web ou mobile, n'hésitez pas à me
            contacter. Je serai ravi d'échanger avec vous sur les projets à
            venir.
          </p>
        </header>
        <div className="max-w-full basis-full my-5">
          <div className="fieldContainer flex-row flex-wrap w-3/5 mx-auto">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="fieldInput flex flex-row flex-wrap justify-between">
                <div className="field basis-48 max-w-50 mb-5">
                  <Field type="text" placeholder="Nom*" name="nom" required />
                </div>
                <div className="field basis-48 max-w-50 mb-5">
                  <Field
                    type="email"
                    placeholder="E-mail*"
                    name="user_email"
                    required
                  />
                </div>
              </div>
              <div className="flex-row flex-wrap mb-5">
                <Field type="text" placeholder="Sujet*" name="sujet" required />
              </div>
              <div className="flex-row flex-wrap mb-5">
                <TextArea name="message" placeholder="Message*" required />
              </div>
              <div className="flex-row flex-wrap">
                <div>
                  <ReCAPTCHA
                    sitekey={reCAPTCHA_KEY}
                    onChange={onChange}
                    ref={recaptchaRef}
                  />
                  <small
                    className={
                      !error
                        ? 'text-red-600 invisible'
                        : 'text-red-600 visible duration-300'
                    }
                  >
                    Veuillez cocher la case "Je ne suis pas un robot"
                  </small>
                  <button
                    type={!captchaIsDone ? 'button' : 'submit'}
                    className="flex items-center gap-1.5 bg-davy-grey text-main-color rounded-md font-light tracking-wider my-3 py-3 px-4 hover:bg-very-dark-gray"
                    onClick={handleClick}
                  >
                    Envoyer <i className="bx bxs-send -rotate-45"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
