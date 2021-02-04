import Button from "../components/Button"
import Variable from "../components/Syntax/Variable"
import styles from "../styles/Header.module.css"
import defaultStyles from "../styles/default.module.css"

export default function Header() {
  return (
    <section className={styles.container}>
      <div className={styles.dots} />
      <div className={styles.background} />
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleBackground} />
          <h1 tabIndex="0">Sergey Sovgut</h1>
          <p className={defaultStyles.syntax}>
            <Variable>NodeJS</Variable> && <Variable>React</Variable> &&{" "}
            <Variable>NextJS</Variable> // developer
          </p>
        </div>
        <div className={styles.links}>
          <Button url="https://github.com/Sovgut">Github</Button>
          <Button url="https://t.me/s_sovgut">Telegram</Button>
          <Button url="mailto:dev.devua@outlook.com">Email</Button>
        </div>
      </div>
    </section>
  )
}
