import React from "react";
import styles from "./Hero.module.scss";
import cn from 'classnames'
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImage}>
        <img alt="hero" src={"./smoothie.png"}></img>
      </div>
      <div className={styles.heroDetails}>
        <h1 className={styles.heroTitle}>Simple and Tasty Juice Recipes</h1>
        <button className={styles.heroButton}>View All Recipes</button>
        <h2 className={styles.heroTitle}>or</h2>
        <button className={cn(styles.widerButton)}>Write Your Own Smoothie Recipes</button>
      </div>
    </div>
  );
};

export default Hero;
