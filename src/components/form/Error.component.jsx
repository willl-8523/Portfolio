import React from 'react';

const ErrorComponent = ({error_name, message}) => {
  return (
    <small
      className={
        !error_name
          ? 'text-red-600 my-2 invisible'
          : 'text-red-600 my-2 visible duration-300'
      }
    >
      {message}
    </small>
  );
};

export default ErrorComponent;
