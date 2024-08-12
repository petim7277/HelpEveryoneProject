import React from "react";
import  styles from "./HeroSection.module.css"
import  heroImage from "../../Assets/HeroImage.svg"
import  playButton from "../../Assets/playButton.png"
import { MdPlayArrow } from "react-icons/md";
const HeroSection = () => {
    return(
        <div className={styles.mainCont}>
                  <div className={styles.heroText}>
                      <h1>We <span>Help</span>Everyone</h1>
                      <h1>Here For A <span>Better Life</span></h1>
                      <p>If you are someone who like to help other, get started</p>
                      <div className={styles.heroButtons}>
                          <div className={styles.buttonWrap}>
                              <button>Get Started</button>
                          </div>
                          <div className={ styles.secondButton}>
                              <p>Watch our story</p>
                              <MdPlayArrow style={{color : "#2995E2", width:"1.80rem", height: "1.80rem",
                                  paddingTop:"1rem"}} />
                          </div>

                      </div>
                  </div>

                  <img src={heroImage} alt={"Hero Image"}/>

        </div>
    )
}
export  default  HeroSection;