import Head from "next/head"
import { Component } from "react"
import Attribute from "../components/Attribute"
import Button from "../components/Button"
import Class from "../components/Class"
import Expression from "../components/Expression"
import Function from "../components/Function"
import Property from "../components/Property"
import Variable from "../components/Variable"
import styles from "../styles/Home.module.css"

export default class Home extends Component {
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
          <section>
            <div className={styles.dots} />
            <div className={styles.background} />
            <div className={styles.content}>
              <div className={styles.title}>
                <div className={styles.titleBackground} />
                <h1>Sergey Sovgut</h1>
                <p className={styles.syntax}>
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
          <section style={{ paddingBottom: "2rem" }}>
            <div className={styles.content}>
              <h3 className={styles.sectionTitle}>
                What do I know and study at the moment?
              </h3>
              <div className={styles.cards}>
                <div className={[styles.card, styles.syntax].join(" ")}>
                  <div>
                    /** <Variable>@use</Variable> In every project */
                    <br />
                    <Expression>type</Expression> <Class>Language</Class> ={" "}
                    <Class>Typescript</Class> & <Class>Javascript</Class>
                  </div>
                </div>
                <div className={[styles.card, styles.syntax].join(" ")}>
                  <div>
                    /** <Variable>@backend</Variable> My favorite ORM tool */
                    <br />
                    <Expression>
                      const
                    </Expression> <Variable>model</Variable> ={" "}
                    <Expression>await</Expression> <Class>Sequelize</Class>.
                    <Function>findOne</Function>()
                  </div>
                </div>
                <div className={[styles.card, styles.syntax].join(" ")}>
                  <div>
                    /** <Variable>@frontend</Variable> React */
                    <br />
                    <Expression>class</Expression> <Class>React</Class>{" "}
                    <Expression>extends</Expression> <Class>Component</Class>{" "}
                    {"{"}
                    <br />
                    <span style={{ paddingLeft: "2rem", display: "block" }}>
                      <Function>render</Function>() {"{"}
                      <Expression>...</Expression>
                      {"}"}
                    </span>
                    {"}"}
                  </div>
                </div>
                <div className={[styles.card, styles.syntax].join(" ")}>
                  <div>
                    /** <Variable>@backend</Variable> NextJS */
                    <br />
                    <Expression>async</Expression>{" "}
                    <Expression>function</Expression>{" "}
                    <Function>getServerSideProps</Function>(
                    <Attribute>context</Attribute>) {"{"}
                    <span style={{ paddingLeft: "2rem", display: "block" }}>
                      <Expression>return</Expression> {"{"}
                      <span style={{ paddingLeft: "2rem", display: "block" }}>
                        <Property>props</Property>: {"{"}
                        <Expression>...</Expression>
                        {"}"}
                      </span>
                      {"}"}
                      <br />
                    </span>
                    {"}"}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={styles.content}>
              <h3 className={styles.sectionTitle}>Developed projects</h3>
              <div className={styles.syntax}>
                <p>At the moment I have no public projects.</p>
              </div>
            </div>
          </section>
          <section
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={styles.content} style={{ width: "max-content" }}>
              <Expression>instanceof</Expression> <Variable>font</Variable> ==={" "}
              <Class>
                <a href="https://github.com/tonsky/FiraCode" target="_blank">
                  FiraCode
                </a>
              </Class>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
