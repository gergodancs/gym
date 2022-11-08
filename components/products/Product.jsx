import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../styles/product/Product.module.css";
import Form from "../Form";
import { motion } from "framer-motion";

const Product = (props) => {
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    setShowForm(false);
  }, []);

  return (
    <motion.div
      className={styles.card_wrapper}
      initial={{
        opacity: 0,
        translateX: props.timing % 2 === 0 ? -50 : 50,
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.4, delay: props.timing * 0.3 }}
    >
      <div className={styles.card}>
        {!showForm && (
          <div>
            <h2>{props.title}</h2>
            <Image
              src={props.src}
              alt="product for sale"
              width={300}
              height={300}
            />
            <p>{props.description}</p>
            <span>Ár: {props.price}</span>
          </div>
        )}

        <div className={!showForm ? styles.hidden : styles.show_form}>
          <Form
            product={props.title}
            price={props.price}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        </div>
      </div>
      {!showForm && (
        <div className={styles.button_container}>
          <button onClick={() => setShowForm(true)}>MEGRENDELEM!</button>
        </div>
      )}
    </motion.div>
  );
};

export default Product;
