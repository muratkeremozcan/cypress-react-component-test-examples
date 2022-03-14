import useInfiniteScroll from 'react-infinite-scroll-hook'
import styled from 'styled-components'
import { useLoadItems } from './utils/useLoadItems'
import { List, ListItem, Loading } from './components/List'

const ListContainer = styled.div`
  max-width: 600px;
  overflow: auto;
  background-color: #fafafa;
`

// if we have a scrollable container and we want to use it as our "list container" instead of document, we just need to use rootRef

function InfiniteListWithHorizontalScroll() {
  const { loading, items, hasNextPage, error, loadMore } = useLoadItems()

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: '0px 400px 0px 0px'
  })

  return (
    <>
      <ListContainer data-cy="list-container" ref={rootRef}>
        <List direction="horizontal">
          {items.map((item) => (
            <ListItem data-cy={`list-item-${item.key}`} key={item.key}>
              {item.value}
            </ListItem>
          ))}
          {hasNextPage && (
            <ListItem ref={infiniteRef}>
              <Loading />
            </ListItem>
          )}
        </List>
      </ListContainer>
    </>
  )
}

export default InfiniteListWithHorizontalScroll
