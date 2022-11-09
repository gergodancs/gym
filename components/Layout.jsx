import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className={styles.app_container}>
      <Nav />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
