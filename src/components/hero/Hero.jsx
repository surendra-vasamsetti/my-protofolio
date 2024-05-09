import React from 'react'
import styles from "./Hero.module.css";

import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Iam SURI</h1>
        <p className={styles.description}>
          I'm  a frontend developer and I have some experience in backend development.Reach out if you'd like to hire me.Thank you for visiting my protofolio!
        </p>
        <a  className={styles.contactBtn} href="mailto:myemail@gmail.com">Contact me</a>

      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="hero" className={styles.heroImg} />
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/ >
    </section>
  )
}

export default Hero
