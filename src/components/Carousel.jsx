"use client";

import styles from './carousel.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineCaretRight, AiFillCaretLeft } from "react-icons/ai";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const lastImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  if (!Array.isArray(images) || images.length === 0) {
    return;
  }
  return (
    <article className={styles.carousel__container}>
      <div className={styles.carousel__container_image}>
        <Image
          className={styles.carousel__image}
          src={images[currentImage]}
          width={380}
          height={0}
          alt="imagen"
        />
      </div>
      <div className={styles.carousel__container_btns}>
        <button
          className={styles.carousel__btn}
          onClick={lastImage}
          type="button"
        >
          <AiFillCaretLeft />
        </button>
        <button
          className={styles.carousel__btn}
          onClick={nextImage}
          type="button"
        >
          <AiOutlineCaretRight />
        </button>
      </div>
    </article>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Carousel;
