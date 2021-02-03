import styles from "../styles/Button.module.css"

export default function Button({ url, children }) {
  return (
    <a className={styles.button} href={url} target="_blank">
      <span />
      <div>{children}</div>
    </a>
  )
}
