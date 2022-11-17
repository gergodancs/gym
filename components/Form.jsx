import { useState, useEffect } from "react";
import styles from "../styles/Form.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowBack } from "react-icons/ti";
import { RiMailSendFill } from "react-icons/ri";

const Form = (props) => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    setProduct(props.title);
  }, [props.showForm]);

  const onClickBack = () => props.setShowForm(false);
  return (
    <div className={props.showForm ? styles.show_form : styles.hidden}>
      <div className={styles.title_container}>
        <TiArrowBack className={styles.icon} size={40} onClick={onClickBack} />
      </div>

      <div className={styles.subtitle}>
        <span>{props.product} </span> <span>Ár: {props.price}</span>
      </div>

      <form
        className={styles.form}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="product" value={product} />
        <input type="text" name="name" />
        <label htmlFor="name">Név</label>
        <input type="email" name="email" />
        <label htmlFor="email">Email</label>
        <input type="text" name="phone" />
        <label htmlFor="phone">Telefonszám</label>

        <button className={styles.formBtn} type="submit">
          Elküld
          <RiMailSendFill size={30} />
        </button>
      </form>
      <p className={styles.p}>
        A rendelés elküldése után, munkatársaink 24 órán belül felveszik Önnel a
        kapcsolatot, hogy megtudjuk pontos igényeit. Eszközeinket megrendelésre
        gyártjuk, rövid határidővel
      </p>
    </div>
  );
};

export default Form;
