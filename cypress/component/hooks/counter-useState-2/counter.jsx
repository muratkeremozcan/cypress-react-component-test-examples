import { commerce } from 'faker'
import { useState } from 'react'

const ProductList = () => {
  // useState is like this.setState({...})
  // we give state an initial value of products & cart, we get an array back and destructure
  // products is what we render
  const [products] = useState([
    { id: 100, name: `${commerce.productName()}` },
    { id: 200, name: `${commerce.productName()}` },
    { id: 300, name: `${commerce.productName()}` }
  ])
  // cart is what we render, setCart is a function that we can invoke and thereby change the value of cart
  const [cart, setCart] = useState([])

  // flattened cart array & copy of the product
  const addToCart = (product) => setCart([...cart, { ...product }])
  // setCart([...cart, {...product}]) would be: this.state({ cart: [...cart, {...product}] })

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          <button data-cy="product-button" onClick={() => addToCart(p)}>
            {p.id} {p.name}
          </button>
          <br></br>
        </div>
      ))}
      <h2>Cart items</h2>
      {cart.map((item) => (
        <ul data-cy="cart-item" key={item.id}>
          {item.id} {item.name}
        </ul>
      ))}
    </div>
  )
}

export default ProductList
