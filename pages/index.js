import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inspire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div id="ins-top">
          <h1 className={styles.title}>
            Inspire
          </h1>
          <p>AI-enabled diagnostics for respiratory disease, 1,000x cheaper than spirometry tests, in less than 60 seconds.</p>
        </div>



        <div id="ins-featured">
          <h5>Supported by</h5>
          <center>
            <img class="ins-featured-img-cansbridge" src="Cansbridge_Fellowship_logo.jpg" alt="Cansbridge Fellowship AEF Grant" />
            <img class="ins-featured-img" src="McGill-Engine.jpg" alt="McGill Engine" />
            <img class="ins-featured-img-next-ai" src="1_Next_AI_Primary.png" alt="NEXT AI" />
            <img class="ins-featured-img" src="Imagine-Cup-Logo_Color-1000x277.jpg" alt="Imagine Cup" />
            <img class="ins-featured-img" src="McGill-Dobson-Logo.png" alt="McGill Dobson" />
          </center>
        </div>



        <div id="ins-about">
          <p>We believe in delivering <b>low-cost</b> and <b>rapid</b> tools to diagnose respiratory disease in developing and isolated regions.</p>

          <h2>Our Story</h2>

          <p>The Summer before starting university, I spent a week doing video calls with community healthcare workers in Central America, as part of a student-hosted volunteering initiative. Growing up in Canada, I was torn by the fact that communities around the world weren't able to access quality healthcare. As a result, I wanted to use my background and experiences to build tools to contribute to solving the challenge of accessible healthcare.</p>

          <p>While reading a WHO report, I learned that respiratory conditions were a top 10 cause of death in the world, where the majority of fatalities occured in developing countries. I felt driven to solve this problem, which was the start of Inspire.</p>

          <p>- Laurence, Founder @Inspire</p>   

          <h2>Our Vision</h2>
          <p>We are building a cloud-based platform that uses AI to diagnose respiratory conditions using sound recordings.</p>
          <p>We aim to achieve the following metrics:</p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <span className={styles.visionStat}>90%+</span><br/>
              <span>accuracy</span>
            </div>
            <div className={styles.card}>
              <span className={styles.visionStat}>1000x</span><br/>
              <span>more affordable</span>
            </div>
            <div className={styles.card}>
              <span className={styles.visionStat}>60</span><br/>
              <span>seconds</span>
            </div>
          </div>

          </div>
        
        <div id="ins-contact">
        </div>

        <div id="ins-team">
          <center><h2>Meet the Team Building Inspire</h2></center>
            <div className={styles.grid}>
              <div className={styles.card}>
                <span className={styles.cardFounderName}>Laurence Liang</span><br />
                <span>Tech Lead</span>
              </div>
              <div className={styles.card}>
                <span className={styles.cardFounderName}>Qi Zuo</span><br />
                <span>Health lead</span>
              </div>
            </div>
          <center><h2>Advisors</h2></center>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Jogral Jean</h3>
            </div>
            <div className={styles.card}>
              <h3>Kristina K., PhD</h3>
            </div>
          </div>
        </div>

      </main>


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }


        #ins-top {
          padding-left: 5%
          padding-right: 5%;
          height: 300px;
        }

        #ins-featured {

        }

        #ins-about {
          padding-left: 5%;
          padding-right: 5%;

        }

        # ins-contact {

        }

        # ins-team {
          padding-left: 5%;
          padding-right: 5%;
          // width: 50%;

        }

        #ins-featured h5 {
          text-align: center;
        }

        .ins-featured-img {
          max-height: 30px;
          padding-left: 5px;
          padding-right: 5px;
        }

        .ins-featured-img-cansbridge {
          max-height: 35px;
          padding-left: 5px;
          padding-right: 5px;
        }

        .ins-featured-img-next-ai {
          height: 15px;
          margin-bottom: 7.5px;
          padding-left: 5px;
          padding-right: 5px;
        }


      `}</style>
    </div>
  )
}


        // <div className={styles.grid}>
        //   <a href="https://nextjs.org/docs" className={styles.card}>
        //     <h3>Documentation &rarr;</h3>
        //     <p>Find in-depth information about Next.js features and API.</p>
        //   </a>

        //   <a href="https://nextjs.org/learn" className={styles.card}>
        //     <h3>Learn &rarr;</h3>
        //     <p>Learn about Next.js in an interactive course with quizzes!</p>
        //   </a>

        //   <a
        //     href="https://github.com/vercel/next.js/tree/master/examples"
        //     className={styles.card}
        //   >
        //     <h3>Examples &rarr;</h3>
        //     <p>Discover and deploy boilerplate example Next.js projects.</p>
        //   </a>

        //   <a
        //     href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //     className={styles.card}
        //   >
        //     <h3>Deploy &rarr;</h3>
        //     <p>
        //       Instantly deploy your Next.js site to a public URL with Vercel.
        //     </p>
        //   </a>
        // </div>
