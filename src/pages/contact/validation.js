export default function validation(values) {
  const errors = {};

  const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  const name_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]{2,}$/;
  const message_pattern = /^.{10,}$/;
  const sujet_pattern = /^[A-Za-z0-9\s-.]{4,}$/;

  if (values.user_name === '') {
    errors.user_name = 'Nom est obligatoire';
  } else if (!name_pattern.test(values.user_name)) {
    errors.user_name = 'Nom minimum 2 caractères';
  }

  if (values.user_email === '') {
    errors.user_email = 'Email est obligatoire';
  } else if (!email_pattern.test(values.user_email)) {
    errors.user_email = "Format invalide";
  }

  if (values.sujet === '') {
    errors.sujet = "Sujet obligatoire";
  } else if (!sujet_pattern.test(values.sujet)) {
    errors.sujet = "Sujet minimum 4 caractères";
  }

  if (values.message === '') {
    errors.message = 'Le message est obligatoire';
  } else if (!message_pattern.test(values.message)) {
    errors.message = 'Message minimum 10 caractères';
  }

  return errors;
}
