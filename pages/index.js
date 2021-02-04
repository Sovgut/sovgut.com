import Head from "next/head"
import { Component } from "react"
import Footer from "../containers/Footer"
import Header from "../containers/Header"
import Knowledge from "../containers/Knowledge"
import Projects from "../containers/Projects"
import styles from "../styles/App.module.css"

export default class Application extends Component {
  componentDidMount() {
    if (
      process.env.NODE_ENV === "production" &&
      !window.location.href.includes("https")
    ) {
      window.location.href = window.location.href.replace("http", "https")
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Sergey Sovgut</title>
          <meta name="description" content="Sovgut Sergey portfolio site" />
          <link type="image/png" sizes="16x16" rel="icon" href="/favicon.png" />
          <link type="image/png" sizes="32x32" rel="icon" href="/favicon.png" />
          <link type="image/png" sizes="96x96" rel="icon" href="/favicon.png" />
          <link
            type="image/png"
            sizes="120x120"
            rel="icon"
            href="/favicon.png"
          />
        </Head>
        <main className={styles.main}>
          <Header />
          <Knowledge />
          <Projects />
          <Footer />
        </main>
      </div>
    )
  }
}
