import styles from "../styles/Button.module.css"

/**
 * @param {{ url: string }} param0
 */
export default function Button({ url, children }) {
  return (
    <a
      className={styles.button}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span />
      <div>{children}</div>
    </a>
  )
}
