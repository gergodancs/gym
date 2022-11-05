import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/product/Product.module.css";
import Form from "../Form";

const Product = (props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.card}>
      {!showForm && (
        <>
          <h2>{props.title}</h2>
          <Image
            src={props.src}
            alt="product for sale"
            width={300}
            height={350}
          />
          <p>{props.description}</p>
          <span>Ár: {props.price}</span>
        </>
      )}
      {showForm && <Form title={props.title} price={props.price} />}
      <button onClick={() => setShowForm((prevState) => !prevState)}>
        {showForm ? "VISSZA" : "ÉRDEKEL!"}
      </button>
    </div>
  );
};

export default Product;
