import styles from "../styles/Form.module.css";

import { TiArrowBack } from "react-icons/ti";

const Form = (props) => {
  const onClickBack = () => props.setShowForm(false);
  return (
    <>
      <div className={props.showForm ? styles.show_form : styles.hidden}>
        <div className={styles.title_container}>
          <TiArrowBack
            className={styles.icon}
            size={40}
            onClick={onClickBack}
          />
          <h2 className={styles.title}>Megrendelőlap</h2>
        </div>

        <div className={styles.subtitle}>
          <span>{props.product} </span> <span>Ár: {props.price}</span>
        </div>

        <form
          className={styles.form}
          name="contact"
          method="POST"
          data-netlify="true"
          submit="submit"
        >
          <div>
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">Név:</label>
            <input type="text" name="name" placeholder="Név" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Email" />
            <label htmlFor="phone">Telefonszám:</label>
            <input type="text" name="phone" placeholder="Telefonszám" />
          </div>
          <div className={styles.button_container}>
            <button type="submit">ELKÜLD!</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
