import  styles from "./BuyingFood.module.css"
import  buyingFoodImage from "../../Assets/BuyingFood.png"
const BuyingFood = () => {
  return(
      <div className={ styles.mainDiv}>
          <div className={styles.firstDiv}>
           <h2>3-Buying Food And Clothes</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Id ullamcorper <br/>
                  iaculis laoreet egestas velit phasellus euismod aliquam. <br/>
                  Ullamcorper sit amet neque tellus libero sem dui tristique. Ac<br/>
                  quam penatibus velit at ipsum aliquet tortor.</p>
              <div className={styles.buttonWrap}>
                  <button>Buying Food </button>
              </div>
          </div>
          <div className={styles.secondDiv}>
           <img src={buyingFoodImage} alt={"Buying food and clothes image"}/>
          </div>
      </div>
  )
}
export default BuyingFood;