import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sergey Sovgut</title>
        <link type="image/png" sizes="16x16" rel="icon" href="/favicon.png" />
        <link type="image/png" sizes="32x32" rel="icon" href="/favicon.png" />
        <link type="image/png" sizes="96x96" rel="icon" href="/favicon.png" />
        <link type="image/png" sizes="120x120" rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <ul className={styles.header}>
          <li>
            <a href="https://github.com/Sovgut" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://t.me/s_sovgut" target="_blank">
              Telegram
            </a>
          </li>
          <li>
            <a href="mailto:dev.devua@outlook.com">Email</a>
          </li>
        </ul>
        <div className={styles.section}>
          <div className={styles.content}>
            <h1 className={styles.title}>Sergey Sovgut</h1>
            <p className={styles.description}>
              NodeJS, React, NextJS developer
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.content}>
            <h2>What do I know and study at the moment?</h2>

            <ul>
              <li>Javascript/Typescript</li>
              <li>NodeJS/Deno</li>
              <li>Express framework</li>
              <li>React</li>
              <li>NextJS</li>
              <li>Sequelize</li>
              <li>Redux</li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.content}>
            <h2>Projects</h2>

            <div className={styles.grid}>
              <span>At the moment I have no public projects.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
