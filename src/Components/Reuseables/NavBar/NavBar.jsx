import  styles from "./NavBar.module.css"
import logoImage from "../../../Assets/happyemoji.png"
const NavBar = () => {


  return(
      <div className={styles.NavCont}>
            <div className={styles.NavLogo}>
                <img src={logoImage} alt={"CompanyLogo"}/>
                <p>Helpeveryone</p>
            </div>

          <div className={styles.NavLinks}>
              <p ><span>Services</span></p>
              <p>Donate</p>
              <p>Who we are</p>
              <p>Join us</p>
              <p>Contact us</p>
              <p>Blog</p>
          </div>

          <div className={styles.Button}>
              <button>Sign up</button>
          </div>
      </div>
  )
}
export  default  NavBar;