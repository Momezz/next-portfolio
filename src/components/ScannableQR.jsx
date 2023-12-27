import styles from '../components/scanneableQR.module.css';
import PropTypes from 'prop-types';
import Image from 'next/image';

const ScannableQR = ({ closeModal, qr }) => {
  return (
    <div className={styles.qr_scanneable__container}>
      <p className={styles.qr_scanneable__title}>
        Lee el códigos QR para ver en tu móvil
      </p>
      <Image src={qr} alt="imagen" width={230} height={230} priority />
      <button className={styles.qr_scanneable__button} onClick={closeModal}>
        Mejor Luego
      </button>
    </div>
  );
};

ScannableQR.propTypes = {
  qr: PropTypes.string,
  closeModal: PropTypes.func,
};

export default ScannableQR;
