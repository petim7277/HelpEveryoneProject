import  styles from "./SpecialHelp.module.css"
import specialHelpImage from "../../Assets/SpecialHelp.svg"
const SpecialHelp = () => {
  return(
          <div className={styles.mainDiv}>
          <div className={styles.wrapDiv}>

                          <div className={styles.firstDiv}>
                            <img src={specialHelpImage} alt={"Special help "}/>
                          </div>
                          <div className={styles.secondDiv}>
                           <h1>Do You Want To</h1>
                           <h1>Have Special Help ?</h1>
                              <div className={styles.buttonWrap}>
                                  <button>Get in  Touch! </button>
                              </div>
                          </div>
          </div>
          </div>

  )
}
export default SpecialHelp;