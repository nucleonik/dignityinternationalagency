import Head from 'next/head'
import Image from 'next/image'
import FooterComponent from '../component/FooterComponent'
import HeadComponent from '../component/HeadComponent'
import IndexComponent from '../component/pages/IndexComponent'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadComponent/>

      <main>
        <IndexComponent/>
      </main>

      <FooterComponent/>
    </div>
  )
}
