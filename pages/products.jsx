import Product from "../components/products/Product";
import { PRODUCTS } from "../helpers/products";
import styles from "../styles/product/Product.module.css";

const products = () => {
  return (
    <div className={styles.products_container}>
      {PRODUCTS?.map((product, i) => {
        return (
          <Product
            key={i}
            title={product.title}
            src={product.src}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default products;
