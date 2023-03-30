import styled from '@emotion/styled'
import {useParams, Link, Navigate} from 'react-router-dom'
import {formatCurrency} from '../utils/formatCurrency'
import Spinner from '../components/Spinner'
import {useGetProductByIdQuery} from '../redux/services/products'

export default function ProductDetails() {
  const {id} = useParams<{id: string}>()
  const {data: product, isFetching} = useGetProductByIdQuery(id as string)

  if (isFetching) return <Spinner />

  if (!product) return <Navigate to="/not-found" />

  return (
    <Wrapper>
      <Header>{product.name}</Header>
      <Description>
        <p>
          <strong>ID</strong>: {product.id}
        </p>
        <p>
          <strong>MSRP (USD)</strong>: {formatCurrency(product.retail)}
        </p>
        <p>
          <strong>In Stock?</strong>: {product.isAvailable ? 'Yes' : 'No'}
        </p>
      </Description>
      <GoBack to="/products">Back to list</GoBack>
    </Wrapper>
  )
}

const Wrapper = styled.div({
  textAlign: 'left',
})

const Header = styled.div({
  margin: '16px 0',
  color: '#090637',
  fontSize: 24,
  fontWeight: 700,
})

const GoBack = styled(Link)({
  textDecoration: 'inherit',
  color: '#03c',
})

const Description = styled.div({})
