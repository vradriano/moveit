import { CompletedChallenge } from '../components/CompletedChallenge'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import Profile from '../components/Perfil'

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from '../components/ChallengeBox';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move IT!</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenge />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}