import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  if (
    process.env.NODE_ENV === "production" &&
    !window.location.href.includes("https")
  ) {
    window.location.href = window.location.href.replace("http", "https")
  }

  return <Component {...pageProps} />
}

export default MyApp
