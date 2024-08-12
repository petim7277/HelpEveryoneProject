import  styles from  "./RequestConsultation.module.css"
const RequestConsultation = () => {
  return(
      <div className={styles.mainDiv}>
      <div className={styles.wrapDiv}>
          <div className={styles.firstDiv}>
              <h3>Request A Free Consultation</h3>
              <p>Complete The Form Below SO That Our Consultants Will Contact You.</p>
          </div>
         <div className={styles.secondDiv}>
                 <div className={styles.firstBox}>
                     <p>Full name</p>
                     <div className={styles.formBox}></div>
                     <p>State</p>
                     <div className={styles.formBox}>Arizona</div>
                 </div>
                 <div className={styles.firstBox}>
                     <p>Email </p>
                     <div className={styles.formBox}>Soroushnorozyui@gmail.com</div>
                     <p>Industry</p>
                     <div className={styles.formBox}>Select</div>
                 </div>
         </div>
          <div className={styles.thirdDiv}>
              <button>Submit</button>
          </div>
         </div>

      </div>
  );
}
export  default  RequestConsultation;
