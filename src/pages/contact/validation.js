export default function validation(values) {
  const errors = {};

  const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  const text_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]{2,}$/;

  if (values.nom === '') {
    errors.nom = 'Le nom est obligatoire';
  } else if (!text_pattern.test(values.nom)) {
    errors.nom = 'Le nom doit avoir minimum 2 caractères';
  }

  if (values.sujet === '') {
    errors.sujet = "L'objet de votre email est obligatoire";
  } else if (!text_pattern.test(values.sujet)) {
    errors.sujet = "L'objet de votre email doit avoir minimum 2 caractères";
  }

  if (values.message === '') {
    errors.message = 'Le message est obligatoire';
  } else if (!text_pattern.test(values.message)) {
    errors.message = 'Le message doit avoir minimum 2 caractères';
  }

  if (values.user_email === '') {
    errors.user_email = 'Email est obligatoire';
  } else if (!email_pattern.test(values.user_email)) {
    errors.user_email = "Le format de l'email est invalide";
  }

  return errors;
}
