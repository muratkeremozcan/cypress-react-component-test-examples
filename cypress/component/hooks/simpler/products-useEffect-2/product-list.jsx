import { commerce } from 'faker'
import { useEffect, useState } from 'react'

const productData = [
  { id: 1, name: `${commerce.productName()}` },
  { id: 2, name: `${commerce.productName()}` },
  { id: 3, name: `${commerce.productName()}` }
]

const api = {
  getProducts: () => Promise.resolve(productData),
  getProduct: (id) => Promise.resolve(productData.find((p) => p.id === id))
}

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState('')
  const [selected, setSelected] = useState(Cypress._.random(1, 3))

  // limitation of useEffect cannot use the async await keywords
  // therefore async calls need to be wrapped in functions
  const fetchProducts = async () => setProducts(await api.getProducts())
  async function fetchProduct(productId) {
    const p = await api.getProduct(productId)
    return setProduct(p.name)
  }

  // useEffect: a hook for side effects
  // think of useEffect as a replacement life cycle methods: componentDidMount, componentDidUpdate, and componentWillUnmount
  useEffect(() => {
    fetchProducts()
    fetchProduct(selected)
  }, [selected])
  // the 2nd arg to useEffect is for memoization
  // if a change happens to selected then we will run our useEffect function, otherwise we won't

  const productSelector = (id) => `product-${id}`

  return (
    <>
      <h1>Async shop</h1>
      <h2>Product list</h2>
      {products.map((p) => (
        <div data-cy={productSelector(p.id)} key={p.id}>
          {p.name}
        </div>
      ))}
      <h3>Selected product</h3>
      <span data-cy="selected-product">{product}</span>
      <br></br>
      <button onClick={() => setSelected(1)}>Select</button>
    </>
  )
}

export default ProductList

/*
Lifecycle method vs hooks

Lifecycle methods were needed because we needed the ability todo something to the component before render()

componentDidMount {
  document.title = 'Component started';
}

componentDidUpdate() {
  document.title = `Component updated`
}


This can be accomplished with hooks. The two lifecycle methods can be replaced by useEffect hook
With hooks we also have access to state (the title) and props.

const TitleHook = () => {
  const [title, setTitle] = useState('no title');

  useEffect(() => {
    document.title = `App name ${title} times`;
  })
}

*/

/*
Use effect teardown

useEffect(() => {
  // set up
  // perform side effect
  return () => {
    // perform clean up here
  }
});

useEffect(() => {
  const id = setInterval(() => console.log('logging'));

  return () => {
    clearInterval(id);
  }
})

onMessage = (message) => {
  // do something with message
}

useEffect(() => {
  chatRoom.subscribe('roomId', onMessage)

  return () => {
    chatRoom.unsubscribe('roomId');
  }
})

*/
