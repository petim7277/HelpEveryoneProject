import  styles from "./OurService.module.css"
import  ourServiceImg from "../../Assets/OurServices.svg"
const  OurServices = ()=>{
    return (
        <div className={styles.mainDiv}>


                   <div className={styles.secondDiv}>
                           <div className={styles.wrap}>
                               <div className={styles.firstDiv}>
                                   <h1>Our Services</h1>
                                   <p>Some of the services include the following:</p>
                               </div>
                                   <h2>1-Guardianship Of Children Without Families</h2>
                                   <p>Lorem ipsum dolor sit amet consectetur. Id ullamcorper<br/>
                                       iaculis laoreet egestas velit phasellus euismod aliquam.<br/>
                                       Ullamcorper sit amet neque tellus libero sem dui tristique. Ac <br/>
                                       quam penatibus velit at ipsum aliquet tortor.</p>
                                   <div className={styles.buttonWrap}>
                                       <button>About This </button>
                                   </div>
                           </div>
                       <img src={ourServiceImg} alt={""}/>
                   </div>
        </div>
    )
}
export default OurServices;