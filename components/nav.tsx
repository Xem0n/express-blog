import styles from './nav.module.css';

const Nav = () => (
    <div className={styles.container}>
        <a href="#" className={styles.large}>Main page</a>
        <a href="#">About</a>
    </div>
);

export default Nav;