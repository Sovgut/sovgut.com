import Variable from "../components/Syntax/Variable"
import Property from "../components/Syntax/Property"
import Attribute from "../components/Syntax/Attribute"
import Function from "../components/Syntax/Function"
import Class from "../components/Syntax/Class"
import Expression from "../components/Syntax/Expression"
import styles from "../styles/Knowledge.module.css"
import defaultStyles from "../styles/default.module.css"

export default function Knowledge() {
  return (
    <section className={styles.container} style={{ paddingBottom: "2rem" }}>
      <div className={styles.content}>
        <h3 className={styles.sectionTitle}>
          What do I know and study at the moment?
        </h3>
        <div className={styles.cards}>
          <div
            className={[styles.card, defaultStyles.syntax].join(" ")}
            tabIndex="0"
          >
            <div>
              /** <Variable>@use</Variable> In every project */
              <br />
              <Expression>type</Expression> <Class>Language</Class> ={" "}
              <Class>Typescript</Class> & <Class>Javascript</Class>
            </div>
          </div>
          <div
            className={[styles.card, defaultStyles.syntax].join(" ")}
            tabIndex="0"
          >
            <div>
              /** <Variable>@backend</Variable> Sequelize ORM tool */
              <br />
              <Expression>const</Expression> <Variable>posts</Variable> ={" "}
              <Expression>await</Expression> <Class>Posts</Class>.
              <Function>findAll</Function>({"{"} <Property>where</Property>:{" "}
              <Variable>statement</Variable>, <Property>limit</Property>,{" "}
              <Property>offset</Property> {"}"})
            </div>
          </div>
          <div
            className={[styles.card, defaultStyles.syntax].join(" ")}
            tabIndex="0"
          >
            <div>
              /** <Variable>@frontend</Variable> React */
              <br />
              <Expression>class</Expression> <Class>React</Class>{" "}
              <Expression>extends</Expression> <Class>Component</Class> {"{"}
              <br />
              <span className={defaultStyles.newline}>
                <Function>render</Function>() {"{"}
                <span className={defaultStyles.newline}>
                  <Expression>return </Expression>
                  {"<"}
                  <Class>RenderPosts</Class> <Attribute>posts</Attribute>={"{"}
                  <Variable>this</Variable>.<Property>props</Property>.
                  <Property>posts</Property>
                  {"}"}
                  {" />"}
                </span>
                {"}"}
              </span>
              {"}"}
            </div>
          </div>
          <div
            className={[styles.card, defaultStyles.syntax].join(" ")}
            tabIndex="0"
          >
            <div>
              /** <Variable>@backend</Variable> NextJS */
              <br />
              <Expression>
                async
              </Expression> <Expression>function</Expression>{" "}
              <Function>getServerSideProps</Function>(
              <Attribute>context</Attribute>) {"{"}
              <span className={defaultStyles.newline}>
                <Expression>const</Expression> {"{"}{" "}
                <Property>content</Property>: <Variable>posts </Variable>
                {"}"} = <Expression>await</Expression>{" "}
                <Class>PostService</Class>.<Function>getAll</Function>(
                <Attribute>context</Attribute>.<Property>req</Property>)
                <br />
                <br />
                <Expression>return</Expression> {"{"}
                <span className={defaultStyles.newline}>
                  <Property>props</Property>: {"{"}
                  <Property> posts </Property>
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
  )
}
