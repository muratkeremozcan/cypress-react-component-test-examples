import useInfiniteScroll from 'react-infinite-scroll-hook'
import styled from 'styled-components'
import { useLoadItems } from './utils/useLoadItems'
import { List, ListItem, Loading } from './components/List'

const ListContainer = styled.div`
  background-color: #fafafa;
`

const Footer = styled.div`
  height: 600px;
  background-color: #dcdcdc;
`

function SimpleInfiniteList() {
  const { loading, items, hasNextPage, error, loadMore } = useLoadItems()

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: !!error,
    rootMargin: '0px 0px 400px 0px'
  })

  return (
    <>
      <ListContainer>
        <List>
          {items.map((item) => (
            <ListItem data-cy={`list-item-${item.key}`} key={item.key}>
              {item.value}
            </ListItem>
          ))}
          {/* 
              As long as we have a "next page", we show "Loading" right under the list.
              When it becomes visible on the screen, or it becomes near, it triggers 'onLoadMore'.
              This is our "sentry".
              We can also use another "sentry" which is separated from the "Loading" component like:
                <div ref={infiniteRef} />
                {loading && <ListItem>Loading...</ListItem>}
              and leave "Loading" without this ref.
          */}
          {hasNextPage && (
            <ListItem ref={infiniteRef}>
              <Loading />
            </ListItem>
          )}
        </List>
      </ListContainer>
      <Footer>Footer</Footer>
    </>
  )
}

export default SimpleInfiniteList
