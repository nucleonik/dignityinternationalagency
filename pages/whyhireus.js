import FooterComponent from '../component/FooterComponent'
import HeadComponent from '../component/HeadComponent'
import WhyhireusComponent from '../component/pages/WhyhireusComponent'
import styles from '../styles/Home.module.css'

export default function Whyhireus() {
  return (
    <div className={styles.container}>
      <HeadComponent/>

      <main>
        <WhyhireusComponent/>
      </main>

      <FooterComponent/>
    </div>
  )
}
