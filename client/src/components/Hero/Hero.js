import React from "react";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImage}>
        <img alt="hero" src={"./smoothie.webp"}></img>
      </div>
      <div className={styles.heroDetails}>
        <h1 className={styles.heroTitle}>Simple and Tasty Juice Recipes</h1>
        <Link to="/recipes" className={styles.heroLink}>
          <button className={styles.heroButton}>View All Recipes</button>
        </Link>
        <h2 className={styles.heroTitle}>or</h2>
        <Link to="/write" className={styles.heroLink}>
          <button className={styles.widerButton}>
            Write Your Own Smoothie Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
