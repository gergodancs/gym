import styles from "../styles/Layout.module.css";

import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.app_container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
