import  styles from  "./AboutUs.module.css"
import  sunnyClouds from  "../../Assets/SUN & CLOUDS.png"
import  tents from  "../../Assets/TENTS.png"
const  AboutUs = ()=>{
    return(
        <div className={styles.mainDiv}>
                    <div className={styles.firstDiv}>
                        <img src={sunnyClouds} alt={"Image of sunny clouds"}/>
                        <h1> About us</h1>
                    </div>

                    <div className={styles.secondDiv}>
                    <p>Lorem ipsum dolor sit amet consectetur. Id perambulator oculist latest exists valid phallus<br/>
                        euismod aliquot. Ullamcorper sit amet deque tells libero sem dui tristique. Ac quam penatibus velit <br/>
                                                                                     at ipsum aliquet tortor</p>
                    </div>
                    <div className={styles.tentImage}>
                        <img src={tents} alt={"image of tents"}/>

                    </div>

        </div>
    )
}
export  default  AboutUs;
