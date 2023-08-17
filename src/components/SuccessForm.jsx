import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './successForm.module.css';

const SuccessForm = ({ value }) => {
  const [showComponent, setShowComponent] = useState(true);
  const handleClick = () => {
    setShowComponent(false);
  };

  return (
    <>
      {showComponent ? (
        <div>
          {value ? (
            <div className={styles.success_form__container}>
              <h2 className={styles.success_form__title}>
                Mensaje enviado exitosamente
              </h2>
              <p className={styles.success_form__paragraph}>
                Gracias por tu mensaje. Me pondre en contacto contigo pronto.
              </p>
              <button
              className={styles.success_form__button}
                type="button" onClick={handleClick}>
                OK
              </button>
            </div>
          ) : (
            <div className={styles.success_form__container}>
              <h2 className={styles.success_form__title}>
                Mensaje no ha podido ser enviado
              </h2>
              <p className={styles.success_form__paragraph}>
                Por favor verifica tu conexión a internet o comunícate con migo
                por otro medio
              </p>
              <button
                className={styles.success_form__button}
                type="button"
                onClick={handleClick}
              >
                OK
              </button>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

SuccessForm.propTypes = {
  element: PropTypes.bool.isRequired,
};

export default SuccessForm;
