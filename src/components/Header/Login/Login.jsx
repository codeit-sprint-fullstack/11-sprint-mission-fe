import styles from './Login.module.css';

export function Login({ className, children }) {
    return <a href="" className={`${styles.loginButton} ${className || ''}`}>{children}</a>
}