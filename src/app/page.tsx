import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <h1>Inspire</h1>
      <h5>We help organizations build cloud applications to store and analyze medical data.</h5>


      <h3>Supported By</h3>
      
      <p>McGill Engine</p>
      <p>Microsoft Imagine Cup</p>
      <p>Next AI</p>
      <p>McGill Dobson</p>
      <p>Cansbridge Fellowship</p>


      <h3>Our Product</h3>

      <p>We are building a cloud platform that allows organizations to easily store and analyze medical data.</p>


      <h3>Our Vision</h3>

      <p>We want to make detection of preventable medical conditions accessible for all.</p>

      <p>Here is how we are getting there:</p>

      <p><b>Stage 1:</b> Make storing and analyzing medical data easy, with a one-stop toolkit for cloud applications</p>

      <p><b>Stage 2:</b> Add AI-enabled services for early disease detection</p>

      <p><b>Stage 3:</b> Develop portable robots to monitor more patients at an affordable cost</p>

      <h3>Our Team</h3>

      <p>Laurence Liang</p>

      <p>Qi (Ken) Zuo</p>


      <h3>We'd Love to Connect</h3>

      <p>email@site.com</p>

    </main>
  )
}
