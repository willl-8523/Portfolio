export default function validation(values) {
  const errors = {};

  const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  const name_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]{2,}$/;
  const message_pattern = /^.{10,}$/;
  const sujet_pattern = /^[A-Za-z0-9\s-.]{4,}$/;

  if (values.user_name === '') {
    errors.user_name = 'Name is required';
  } else if (!name_pattern.test(values.user_name)) {
    errors.user_name = 'Name min 10 characters';
  }

  if (values.user_email === '') {
    errors.user_email = 'Email is required';
  } else if (!email_pattern.test(values.user_email)) {
    errors.user_email = 'Invalid format';
  }

  if (values.sujet === '') {
    errors.sujet = 'Subject is required';
  } else if (!sujet_pattern.test(values.sujet)) {
    errors.sujet = 'Subject min 10 characters';
  }

  if (values.message === '') {
    errors.message = 'Message is required';
  } else if (!message_pattern.test(values.message)) {
    errors.message = 'Message min 10 characters';
  }

  return errors;
}
