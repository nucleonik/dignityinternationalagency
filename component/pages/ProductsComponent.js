import React from 'react'
import styles from './ProductsComponent.module.css'
const ProductsComponent = () => {
  return (
    <div>
        <div className={styles.hh} style={{backgroundImage: `url("martbg.png")`, backgroundPosition: 'center', height: '30vw',backgroundSize: '1920px 920px', backgroundRepeat: 'no-repeat' , 
  }}>
        <div className={styles.hh1}>
            <h1>MART FASHION</h1>
        </div>
    </div>
    <div className={styles.hb}>
        <h1>OUR PRODUCTS</h1>
    </div>
    <div className={styles.products}>
        <img src='pant1.png' alt='Jeans'/>
        <img src='pant2.png' alt='Jeans'/>
        <img src='pant3.png' alt='Jeans'/>
        <img src='pant4.png' alt='Jeans'/>
        <img src='pant5.png' alt='Jeans'/>
        <img src='pant6.png' alt='Jeans'/>
        <img src='panta.png' alt='Jeans'/>
        <img src='pantb.png' alt='Jeans'/>
        <img src='pantc.png' alt='Jeans'/>
        <img src='pantd.png' alt='Jeans'/>
        <img src='pante.png' alt='Jeans'/>
        <img src='pantf.png' alt='Jeans'/>
        <img src='pantaa.png' alt='Jeans'/>
        <img src='pantbb.png' alt='Jeans'/>
        <img src='pantcc.png' alt='Jeans'/>
        <img src='pantdd.png' alt='Jeans'/>
        <img src='pantee.png' alt='Jeans'/>
        <img src='pantff.png' alt='Jeans'/>
    </div>
    </div>
  )
}

export default ProductsComponent