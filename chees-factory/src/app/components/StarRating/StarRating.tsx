import React from 'react';
import Image from 'next/image';
import StarTrue from '../../../../public/StarTrue.svg';
import StarFalse from '../../../../public/StarFalse.svg';
import styles from './StarRating.module.scss';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

const MAX_STARS = 5;

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = MAX_STARS }) => {

  const stars = [];

  const trueStars = Math.min(Math.round(rating), maxStars);
  for (let i = 0; i < trueStars; i++) {
    stars.push(
      <Image 
        key={`star-true-${i}`}
        src={StarTrue} 
        alt="Заполненная звезда"
        width={20} 
        height={19} 
        className={styles.star}
      />
    );
  }

  const falseStars = maxStars - trueStars;

  for (let i = 0; i < falseStars; i++) {
    stars.push(
      <Image 
        key={`star-false-${i}`} 
        src={StarFalse} 
        alt="Пустая звезда"
        width={20} 
        height={19}
        className={styles.star}
      />
    );
  }

  return <div className={styles.starsContainer}>{stars}</div>;
};

export default StarRating;