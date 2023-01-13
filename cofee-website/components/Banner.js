import styles from '../styles/Banner.module.css';
const Banner = (props) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            <span className={styles.title1}>Coffe</span>
            <span className={styles.title2}>website</span>
        </h1>
        <p className={styles.subTitle}>Discover nearby Cofee Shops!</p>
        <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
        </div>
    </div>
  )
}

export default Banner;