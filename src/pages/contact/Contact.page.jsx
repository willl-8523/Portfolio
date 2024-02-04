import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import validation from './validation';
import ErrorComponent from '../../components/form/Error.component';

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef(null);

  const reCAPTCHA_KEY = process.env.REACT_APP_RECAPCHAT_KEY;

  const [captchaValue, setCaptchaValue] = useState('');
  const [error, setError] = useState(false);

  const initialValues = {
    user_name: '',
    user_email: '',
    sujet: '',
    message: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    const { nameError, valueError } = { ...formErrors };
    setFormErrors({ ...formErrors, [nameError]: valueError });
  };

  const onChange = (value) => {
    console.log('Captcha value:', value);

    if (value) {
      setCaptchaValue(value);
      setError(false);
    } else {
      setCaptchaValue('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(validation(formValues)).length !== 0)
      return setFormErrors(validation(formValues));
    if (!captchaValue) {
      setFormErrors({});
      return setError(true);
    }

    setFormErrors({});

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          // Réinitialisation de Recapchat et du formulaire
          if (recaptchaRef.current) {
            recaptchaRef.current.reset();
            setFormValues(initialValues);
          }

          // Notification flash d'un succès
          toast.success(`Mail envoyé! 😃`);
        },
        (error) => {
          toast.error(`Une erreur est survenue 😞`);
        }
      );
  };

  return (
    <div className="my-6 max-w-6xl w-full px-5 mx-auto">
      <div className="flex flex-row flex-wrap py-5">
        <header className="contactHeader mb-6 text-center max-w-full basis-full text-very-dark-gray">
          <h1 className="my-3 text-32px font-bold tracking-wider uppercase">
            A new project in mind?
          </h1>
          <p className="leading-7 tracking-wider font-light text-sm">
            I am open to exciting new professional opportunities! If you are
            interested in collaborating with me on a web or mobile application
            project, feel free to contact me. I would be delighted to discuss
            future projects with you.
          </p>
        </header>
        <div className="max-w-full basis-full my-5">
          <div className="fieldContainer flex-row flex-wrap w-3/5 mx-auto">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="fieldInput flex flex-row flex-wrap justify-between">
                <div className="field basis-48 max-w-50 mb-5">
                  <input
                    className="w-full outline-0 py-3 px-4 rounded-md text-very-dark-gray  ring-1 ring-pink-300 ring-inset"
                    type="text"
                    placeholder="Name*"
                    name="user_name"
                    value={formValues.user_name}
                    onChange={handleChange}
                  />
                  <ErrorComponent
                    error_name={formErrors.user_name}
                    message={formErrors.user_name}
                  />
                </div>
                <div className="field basis-48 max-w-50 mb-5">
                  <input
                    className="w-full outline-0 py-3 px-4 rounded-md text-very-dark-gray  ring-1 ring-pink-300 ring-inset"
                    type="text"
                    placeholder="E-mail*"
                    name="user_email"
                    value={formValues.user_email}
                    onChange={handleChange}
                  />
                  <ErrorComponent
                    error_name={formErrors.user_email}
                    message={formErrors.user_email}
                  />
                </div>
              </div>
              <div className="flex-row flex-wrap mb-5">
                <input
                  className="w-full outline-0 py-3 px-4 rounded-md text-very-dark-gray  ring-1 ring-pink-300 ring-inset"
                  type="text"
                  placeholder="Subject*"
                  name="sujet"
                  value={formValues.sujet}
                  onChange={handleChange}
                />
                <ErrorComponent
                  error_name={formErrors.sujet}
                  message={formErrors.sujet}
                />
              </div>
              <div className="flex-row flex-wrap mb-5">
                <textarea
                  className="w-full outline-0 py-3 px-4 rounded-md text-very-dark-gray ring-1 ring-pink-300 ring-inset"
                  name="message"
                  placeholder="Message (minimum 10 characters)"
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
                <ErrorComponent
                  error_name={formErrors.message}
                  message={formErrors.message}
                />
              </div>
              <div className="flex-row flex-wrap">
                <ReCAPTCHA
                  sitekey={reCAPTCHA_KEY}
                  onChange={onChange}
                  ref={recaptchaRef}
                />
                <ErrorComponent
                  error_name={error}
                  message='Please check the box "Je ne suis pas un robot"'
                />
              </div>
              <button className="flex items-center gap-1.5 bg-davy-grey text-main-color rounded-md font-light tracking-wider my-3 py-3 px-4 hover:bg-very-dark-gray">
                Envoyer <i className="bx bxs-send -rotate-45"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
