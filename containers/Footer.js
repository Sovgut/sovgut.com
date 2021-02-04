import Expression from "../components/Syntax/Expression"
import Variable from "../components/Syntax/Variable"
import Class from "../components/Syntax/Class"
import styles from "../styles/Footer.module.css"
import defaultStyles from "../styles/default.module.css"

export default function Footer() {
  return (
    <section className={styles.container}>
      <div className={[styles.content, defaultStyles.syntax].join(" ")}>
        <Expression>instanceof</Expression> <Variable>font</Variable> ==={" "}
        <Class>
          <a
            href="https://github.com/tonsky/FiraCode"
            target="_blank"
            rel="noreferrer noopener"
          >
            FiraCode
          </a>
        </Class>
      </div>
    </section>
  )
}
