import styles from './Menu.module.css';

export function Menu({ children }) {
    return <>
        <a href="" className={styles.menuLink}>{children}</a>
    </>
}