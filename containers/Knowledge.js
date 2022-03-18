import styles from "../styles/Knowledge.module.css"
import defaultStyles from "../styles/default.module.css"
import syntax from "~lib/syntax"

export default function Knowledge() {
  const frontendTextClass = "/** @frontend React */\nclass React extends Component {\n\trender() {\n\t\tconst { posts } = this.props\n\t\treturn <RenderPosts posts={posts} />\n\t}\n}"
  const frontendTextFunctional = "\n\nfunction RenderPosts({ posts }) {\n\treturn (\n\t\t<>\n\t\t\t{posts.map(post => (\n\t\t\t\t<article>\n\t\t\t\t\t<h2>{post.title}</h2>\n\t\t\t\t\t<p>{post.body}</p>\n\t\t\t\t</article>\n\t\t\t))}\n\t\t</>\n\t)\n}"
  const inEveryProject = "/** @use In every project */\ntype Language = Typescript & Javascript";
  const backendText = "/** @backend Prisma ORM */\nconst posts = await PrismaClient.post.findMany(query)"
  const nextJS = "/** @backend NextJS */\nasync function getServerSideProps(context) {\n\tconst { content: posts } = await PostService.list(context.req)\n\n\treturn {\n\t\tprops: { posts }\n\t}\n}"

  return (
    <section className={styles.container} style={{ paddingBottom: "2rem" }}>
      <div className={styles.content}>
        <h3 className={styles.sectionTitle} tabIndex="0">
          What do I know and study at the moment?
        </h3>
        <div className={styles.cards}>
          <div
            className={[styles.card, defaultStyles.syntax].join(" ")}
            tabIndex="0"
          >
            <div dangerouslySetInnerHTML={{ __html: syntax(inEveryProject) }} />
          </div>
          <div
            className={[styles.card, defaultStyles.syntax].join(" ")}
            tabIndex="0"
          >
            <div dangerouslySetInnerHTML={{ __html: syntax(backendText) }} />
          </div>
          <div
            className={[styles.card, defaultStyles.syntax].join(" ")}
            tabIndex="0"
          >
            <div dangerouslySetInnerHTML={{ __html: syntax(frontendTextClass + frontendTextFunctional) }} />
          </div>
          <div
            className={[styles.card, defaultStyles.syntax].join(" ")}
            tabIndex="0"
          >
            <div dangerouslySetInnerHTML={{ __html: syntax(nextJS) }} />
              
          </div>
        </div>
      </div>
    </section>
  )
}
