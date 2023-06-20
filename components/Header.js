import styles from "./../styles/Header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.banner}>
        <h2 className={styles.h2}>Banner Text</h2>
        <a href="#" className={styles.btn}>
          Contact us
        </a>
      </div>
    </>
  );
};

export default Header;
