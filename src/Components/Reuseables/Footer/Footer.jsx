import React from "react";
import styles from "./Foter.module.css"
import logoImage from "../../../Assets/happyemoji.png";
const Footer = () => {
    return(
        <div className={styles.mainDiv}>
                   <div className={styles.firstDiv}>
                           <div className={styles.firstBox}>
                                       <div className={styles.footerLogo}>
                                           <img src={logoImage} alt={"CompanyLogo"}/>
                                           <p>Helpeveryone</p>
                                       </div>
                                       <div className={styles.footerHeader}>
                                       <h3>We <span>Help </span> Everyone</h3>
                                       <h3>Here for a <span>better Life</span></h3>
                                       </div>
                          </div>
                               <div className={styles.wrapDiv}>
                                       <div className={styles.secondBox}>
                                                   <h4>Services</h4>
                                                   <p>Buying food</p>
                                                   <p>Helping The Elderly</p>
                                                   <p>Guardianship</p>
                                                   <p>Other</p>
                                                   <p>Jobs</p>
                                       </div>
                                       <div className={styles.thirdBox}>
                                           <h4>Info</h4>
                                           <p>About us</p>
                                           <p>Contact us </p>
                                           <p>Support</p>
                                       </div>
                               </div>
                   <div className={styles.fourthBox}>
                       <h4>Office</h4>
                       <p>43252 Borer mountains</p>
                       <p>Zackerychester</p>
                       <p>Bahamas</p>
                       <p>734-45-4945</p>
                   </div>
               </div>
                <hr/>
                <div className={styles.secondDiv}>
                 <p>Copyright @ 2021 Helpeveryone LLC All Rights Reserved</p>
                    <p>We Use Cookies For Better Service.  <span>   Accept</span></p>
                </div>
        </div>
    )
}
export  default  Footer;