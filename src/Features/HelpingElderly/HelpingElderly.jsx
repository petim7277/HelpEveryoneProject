import  styles from "./HelpingElderly.module.css"
import  helpingImage from  "../../Assets/HelpingElderly.svg"
const HelpingElderly = () => {
  return (
      <div className={styles.mainDiv}>
          <img src={helpingImage} alt={"Helping the elderly Image"}/>

              <div className={styles.firstDiv}>
                      <h2>2-Helping The Elderly</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Id ullamcorper <br/>
                          iaculis laoreet egestas velit phasellus euismod aliquam. <br/>
                          Ullamcorper sit amet neque tellus libero sem dui tristique. Ac<br/>
                          quam penatibus velit at ipsum aliquet tortor.</p>
                      <div className={styles.buttonWrap}>
                          <button>About Elderly </button>
                      </div>
              </div>
      </div>
  )
}
export  default HelpingElderly;