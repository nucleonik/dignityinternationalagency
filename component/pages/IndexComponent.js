import { Link } from '@chakra-ui/react'
import React from 'react'
import styles from '../pages/IndexComponent.module.css'

const IndexComponent = () => {
  return (
    <div>
        <div className={styles.hero} style={{ backgroundImage: `url("bgimg1.png")`, backgroundPosition: 'center', height: '40vw',backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
            <div>
                  <h1>DIGNITY INTERNATIONAL AGENCY</h1>
            </div>
            <div>
                  <h2>Human Resource Consultant & Suppliers</h2>
            </div>
            <div>
                  <h3>RL - 1534</h3>
            </div>
            <div className={styles.aboutusbutton}>
                <Link href='about'>
                    <h4>ABOUT US</h4>
                </Link>
            </div>
        </div>
        <div className={styles.chairman}>
          <div className={styles.chairmanl}>
                <img src='chairman.png' alt='chairman'/>
          </div>
          <div className={styles.chairmanr}>
            <div className={styles.chairmanmessage}>
              <h1>Message from Chairman</h1>
              <img src='rec.svg' alt='rec'/>
              <p>Employees are by far the most valued asset of our organzation. Dignity International Agency Company dedicated in grooming this asset by providing effective manpower solutions to international businesses. Our team of consultants and human resource specialists put their years of experience and skill to work on our clients recruiting projects. We are quite proud of the fact that Dignity International Agencys services have been widely acknowledged and appreciated by its clients. This feedback motivates us to do even better in our area of expertise. We ensure that our candidates, whether they have previous abroad employment experience or embarking on their first overseas assignment, are available at the most competitive pay scales and are equipped in every way to achieve optimum efficiency. Even our constant expansion of our workforce and client base cannot sway our dedication to you or force us to compromise on quality. We are confident in our ability to meet every area of your labor requirements to your complete satisfaction. We propose to form a strategic alliance with your firm in order to deliver the most efficient, cost-effective, and ethical manpower from Bangladesh. We can be relied on to hire technical and non-technical personnel.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default IndexComponent