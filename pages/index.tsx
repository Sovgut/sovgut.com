import Head from "next/head"
import { Component } from "react"
import Footer from "../containers/Footer"
import Header from "../containers/Header"
import Knowledge from "../containers/Knowledge"
import Projects from "../containers/Projects"
import styles from "../styles/App.module.css"

export default class Application extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Sergey Sovgut</title>
          <meta name="description" content="Sergey Sovgut portfolio site" />
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

export async function getServerSideProps({ req, res }) {
  if (req.headers["x-forwarded-proto"]) {
    const protocol = req.headers["x-forwarded-proto"]

    if (protocol === "http" && process.env.NODE_ENV !== "development") {
      res.writeHead(301, {
        Location: `https://${req.headers["host"] || "sovgut.com"}`,
      })
      res.end()
    }
  }

  return { props: {} }
}
