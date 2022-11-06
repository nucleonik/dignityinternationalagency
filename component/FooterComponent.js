import React from 'react'
import styles from './FooterComponent.module.css'

const FooterComponent = () => {
  return (
    <div>
        <footer className={styles.footer}>
        <div className={styles.footertop}>
            <h1>Contact Us</h1>
        </div>
        <div className={styles.footerdown}>
            <div className={styles.dhaka}>
            
                <h2>Dhaka Office</h2>
                <p>372/1, East Rampura, Dhaka-1219, Bangladesh</p>
                <p>Cell: +880 1789 789 222, +880 1737 837 314</p>
                <p>Phone: +8802-55132481</p>
                <p>Email: dignityinternationalagency@gmail.com,</p>
                <p>shihab.dignity@gmail.com</p>
            </div>
            <div className={styles.rangpur}>
                <h1>Rangpur Offce</h1>
                <p>Mahigonj Bazar, Mahigonj, Rangpur</p>
                <p>Cell: +880 1786 507 268, +880 1786 507 168</p>
                <p>Phone: +880521-63294</p>
            </div>
        </div>
        <div className={styles.dev}>
            <a href="https://thinkcrypt.io" target="_blank"> &copy; 2022 Dignity International Agency l All Rights Reserved l Powered by thinkcrypt.io/</a>
        </div>

    </footer>
    </div>
    
  )
}

export default FooterComponent