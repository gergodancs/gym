import { useState } from "react";
import styles from "../styles/Form.module.css";

const Form = (props) => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
  });
  return (
    <>
      <h2 className={styles.title}>Megrendelőlap</h2>
      <span>{props.title}</span>
      <span>Ár: {props.price}</span>
      <form className={styles.form}>
        <label htmlFor="name">Név:</label>
        <input type="text" name="name" placeholder="Név" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="Email" />
        <label htmlFor="phone">Telefonszám:</label>
        <input type="text" name="phone" placeholder="Telefonszám" />
        <button className={styles.submit}>MEGRENDELEM!</button>
      </form>
    </>
  );
};

export default Form;
