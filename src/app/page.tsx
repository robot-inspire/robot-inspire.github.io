import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.landingTop}>

        <h1>Inspire</h1>
        <h5>We help organizations build cloud applications to store and analyze medical data.</h5>

      </div>

      <div className={styles.landingSupport}>
        <h3>Supported By</h3>
        <br/>
        
        <Image
          src="/1_Next_AI_Primary.png"
          alt="Next AI"
          width="100"
          height="20"
        />
      </div>

      <div className={styles.landingProduct}>
        <h3>Our Product</h3>

        <p>We are building a cloud platform that allows organizations to easily store and analyze medical data.</p>
      </div>

      <div className={styles.landingVision}>

        <h3>Our Vision</h3>

        <p>We want to make detection of preventable medical conditions accessible for all.</p>

        <p>Here is how we are getting there:</p>

        <p><b>Stage 1:</b> Make storing and analyzing medical data easy, with a one-stop toolkit for cloud applications</p>

        <p><b>Stage 2:</b> Add AI-enabled services for early disease detection</p>

        <p><b>Stage 3:</b> Develop portable robots to monitor more patients at an affordable cost</p>

      </div>

      <div className={styles.landingTeam}>

        <h3>Our Team</h3>

        <p>Laurence Liang</p>
	<p>Title</p>
	<p>Description</p>

        <p>Qi (Ken) Zuo</p>
	<p>Title</p>
	<p>Description</p>

      </div>

      <div className={styles.landingConnect}>

        <h3>We'd Love to Connect</h3>

        <p>inspire.health.ai@gmail.com</p>

      </div>

    </main>
  )
}
