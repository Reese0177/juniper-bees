import Layout from '../components/Layout'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.header}>Looking for the perfect custom cake?</h1>
          <h2 className={styles.subheader}>You've come to the right place.</h2>
        </div>
      </section>
    </Layout>
  )
}
