import styles from "../styles/Projects.module.css"
import defaultStyles from "../styles/default.module.css"

export default function Projects() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.sectionTitle}>Developed projects</h3>
        <div className={defaultStyles.syntax}>
          <p>At the moment I have no public projects.</p>
        </div>
      </div>
    </section>
  )
}
