import FooterComponent from '../component/FooterComponent'
import HeadComponent from '../component/HeadComponent'
import ProductsComponent from '../component/pages/ProductsComponent'

export default function Products() {
  return (
    <div>
      <HeadComponent/>

      <main>
        <ProductsComponent/>
      </main>

      <FooterComponent/>
    </div>
  )
}
