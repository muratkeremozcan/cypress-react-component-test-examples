import { useState } from 'react'

// App idea from https://twitter.com/housecor/status/1268900696604258304

export default function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || ['kiwi 🥝']
  )

  const addJuice = () => {
    const updatedCart = cart.concat('juice 🧃')

    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  return (
    <div className="cart">
      <ul>
        {cart.map((item, index) => (
          <li className="item" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <button onClick={addJuice}>Add juice</button>
    </div>
  )
}
