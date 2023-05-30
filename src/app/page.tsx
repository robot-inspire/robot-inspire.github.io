import Image from 'next/image'
import styles from './page.module.css'

const profileImageStyle = {
  borderRadius: '25%',
}

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.landingTop}>

        <div className={styles.landingTopTitle}>Inspire</div>
        <div className={styles.landingTopSubtitle}>We help organizations build cloud applications to store and analyze medical data.</div>

        <br/><br/>


        <a target="_blank" href="https://calendly.com/inspire-health-ai/meet-with-inspire" className={styles.landingButtonTop}>Book a Meeting</a>

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

        <br/>

        <p>Here is how we are getting there:</p>

        <br/>

        <p><b>Stage 1:</b> Make storing and analyzing medical data easy, with a one-stop toolkit for cloud applications</p>

        <br/>

        <p><b>Stage 2:</b> Add AI-enabled services for early disease detection</p>

        <br/>

        <p><b>Stage 3:</b> Develop portable robots to monitor more patients at an affordable cost</p>

      </div>

      <div className={styles.landingTeam}>

        <h3>Our Team</h3>

        <div className={styles.landingTeamContainer}>

          <div className={styles.landingTeamItem}>

            <Image
              src="/Laurence-Liang-Profile.jpg"
              alt="Laurence Liang Photo"
              width="200"
              height="200"
              style={profileImageStyle}
            />

            <p><b>Laurence Liang</b></p>
            <p>Technical Lead</p><br/>

            <p>Laurence is passionate about combining interdisciplinary technologies to solve meaningful problems. </p>

            <br/>

            <p>The Summer before university, Laurence spent a week with Global Brigades embarking on video calls with community healthcare workers in Honduras. This experience, coupled with a personal interest in reducing healthcare inequalities, led Laurence to build the first prototype for Inspire in the following year: a 3D-printed robotic arm connected to an AI model for respiratory disease diagnostics.</p>

            <br/>

            <p>Having written software in industry roles since 2018, from developing natural language processing tools at Expedia, to building a pre-seed startup's core API prototype, Laurence is passionate about using his personal expriences to develop low-cost and accurate technology to reduce global healthcare inequalities. He has presented his research on bioinformatics and machine learning at ISEF, CWSF and CUCAI. He has been featured on TEDx, is a recipient of the Cansbridge Fellowship during which he developed visualization tools and predictive models for motor tests at ACSL Ltd. (Japan's largest industrial drone manufacturer), and is currenlty pursuing his degree in mechanical engineering at McGill University.</p>

            <br/>

            <p>Laurence is excited to develop accessible and safe hardware and software for Inspire, and would love to connect to help organizations improve the patient experience.</p>

          </div>

          <div className={styles.landingTeamItem}>

            <Image
                src="/Konstantin-Kleine-photo.jpg"
                alt="Photo of mountains"
                width="270"
                height="196"
                style={profileImageStyle}
              />

            <p><b>Qi (Ken) Zuo</b></p>
            <p>Title</p>
	    <br/>
            <p>Description</p>

          </div>

        </div>



      </div>

      <div className={styles.landingConnect}>

        <h3>We'd Love to Connect</h3>

        <p>inspire.health.ai@gmail.com</p>

      </div>

    </main>
  )
}
