import React from 'react'
import Recipe from '../../components/Recipe/Recipe';
import styles from './Recipes.module.scss';
const Recipes = () => {
    return (
        <div className={styles.container}>
            <span className={styles.header}></span>
            <div className={styles.titleContainer}>
                <h1 className={styles.Name}>Recipes</h1>
            </div>
            <div className={styles.recipes}>
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        </div>
    )
}

export default Recipes
