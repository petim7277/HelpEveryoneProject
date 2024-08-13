import  styles from "./NavBar.module.css"
import logoImage from "../../../Assets/happyemoji.png"
import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return(
      <div className={styles.NavCont}>

            <div className={styles.NavLogo}>
                <img src={logoImage} alt={"CompanyLogo"}/>
                <p>Helpeveryone</p>
            </div>
      <div className={styles.wrapDiv}>
          <div className={`${styles.NavLinks}${menuOpen?styles.NavLinks:""}`}>
              <p ><span>Services</span></p>
              <p>Donate</p>
              <p>Who we are</p>
              <p>Join us</p>
              <p>Contact us</p>
              <p>Blog</p>
          </div>

          <div className={`${styles.Button}${menuOpen?styles.Button:""}`}>
              <button className={`${styles.button}${menuOpen?styles.button:""}`}>Sign up</button>
          </div>

      </div>
          <div className={styles.Hamburger} onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
      </div>
  )
}
export  default  NavBar;



