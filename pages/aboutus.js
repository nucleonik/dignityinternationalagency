import FooterComponent from '../component/FooterComponent'
import HeadComponent from '../component/HeadComponent'
import AboutusComponent from '../component/pages/AboutusComponent'


export default function About() {
  return (
    <div>
      <HeadComponent/>

      <main>
        <AboutusComponent/>
      </main>

      <FooterComponent/>
    </div>
  )
}
