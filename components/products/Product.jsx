import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/product/Product.module.css";
import Form from "../Form";

const Product = (props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        {!showForm && (
          <div>
            <h2>{props.title}</h2>
            <Image
              src={props.src}
              alt="product for sale"
              width={300}
              height={350}
            />
            <p>{props.description}</p>
            <span>Ár: {props.price}</span>
          </div>
        )}

        <div className={!showForm ? styles.hidden : ""}>
          <Form product={props.title} price={props.price} showForm={showForm} />
        </div>
      </div>
      <div className={styles.button_container}>
        <button onClick={() => setShowForm((prevState) => !prevState)}>
          {showForm ? "VISSZA" : "MEGRENDELEM!"}
        </button>
      </div>
    </div>
  );
};

export default Product;
