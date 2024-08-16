import  styles from  "./RequestConsultation.module.css"
import {Fragment} from "react";
const RequestConsultation = () => {
  return(
      <div className={`${styles.mainDiv} ${styles.centerItem}`}>
      <div className={`${styles.wrapDiv} ${styles.centerItem}`}>
          <div className={styles.firstDiv}>
              <h3>Request A Free Consultation</h3>
              <p>Complete The Form Below SO That Our Consultants Will Contact You.</p>
          </div>
              <form className={styles.secondDiv}>
                             <div className={styles.firstBox}>
                                 <Fragment>
                                     <label>Full name</label>
                                     <input className={styles.formBox} id="fullName" name="inpField" type="text" placeholder="Precious Etim" />
                                 </Fragment>

                                 <Fragment>
                                     <label>State</label>
                                     <select className={styles.formBox}>
                                         <option>Arizona</option>
                                         <option>Nigeria</option>
                                         <option>Zimbabwe</option>
                                         <option>Rwanda</option>
                                     </select>
                                 </Fragment>
                             </div>
                             <div className={styles.firstBox}>
                                 <Fragment>
                                     <label>Email:</label>
                                     <input className={styles.formBox} id="email" name="inpField" type="email" placeholder="preciousetim@email.com" />
                                 </Fragment>
                                 <Fragment>
                                     <label>Industry</label>
                                     <select className={styles.formBox}>
                                         <option>Education</option>
                                         <option>Researcher</option>
                                         <option>Marketer</option>
                                     </select>
                                 </Fragment>
                             </div>
                     </form>
          <div className={styles.thirdDiv}>
              <button>Submit</button>
          </div>
         </div>

      </div>
  );
}
export  default  RequestConsultation;
