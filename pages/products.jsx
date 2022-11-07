import Product from "../components/products/Product";
import { PRODUCTS } from "../helpers/products";
import styles from "../styles/product/Product.module.css";

const products = () => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={styles.products_container}>
        {PRODUCTS?.map((product, i) => {
          return (
            <Product
              key={i}
              timing={i}
              title={product.title}
              src={product.src}
              description={product.description}
              price={product.price}
            />
          );
        })}
      </div>
      <div onClick={scrollUp} className={styles.upto_btn}>
        Ugrás a lap tetejére
      </div>
    </>
  );
};

export default products;
