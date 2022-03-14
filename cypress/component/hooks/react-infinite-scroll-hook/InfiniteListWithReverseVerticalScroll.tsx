import * as React from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import styled from 'styled-components'
import { useLoadItems } from './utils/useLoadItems'
import { List, ListItem, Loading } from './components/List'

const ListContainer = styled.div`
  max-height: 500px;
  max-width: 500px;
  overflow: auto;
  background-color: #fafafa;
`

function InfiniteListWithReverseVerticalScroll() {
  const { loading, items, hasNextPage, error, loadMore } = useLoadItems()

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: '400px 0px 0px 0px'
  })

  const scrollableRootRef = React.useRef<HTMLDivElement | null>(null)
  const lastScrollDistanceToBottomRef = React.useRef<number>()

  const reversedItems = React.useMemo(() => [...items].reverse(), [items])

  // We keep the scroll position when new items are added etc.
  React.useEffect(() => {
    const scrollableRoot = scrollableRootRef.current
    const lastScrollDistanceToBottom =
      lastScrollDistanceToBottomRef.current ?? 0
    if (scrollableRoot) {
      scrollableRoot.scrollTop =
        scrollableRoot.scrollHeight - lastScrollDistanceToBottom
    }
  }, [reversedItems, rootRef])

  const rootRefSetter = React.useCallback(
    (node: HTMLDivElement) => {
      rootRef(node)
      scrollableRootRef.current = node
    },
    [rootRef]
  )

  const handleRootScroll = React.useCallback(() => {
    const rootNode = scrollableRootRef.current
    if (rootNode) {
      const scrollDistanceToBottom = rootNode.scrollHeight - rootNode.scrollTop
      lastScrollDistanceToBottomRef.current = scrollDistanceToBottom
    }
  }, [])

  return (
    <>
      <ListContainer
        data-cy={'list-container'}
        ref={rootRefSetter}
        onScroll={handleRootScroll}
      >
        <List data-cy="horizontal-list">
          {hasNextPage && (
            <ListItem ref={infiniteRef}>
              <Loading />
            </ListItem>
          )}
          {reversedItems.map((item) => (
            <ListItem data-cy={`list-item-${item.key}`} key={item.key}>
              {item.value}
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </>
  )
}

export default InfiniteListWithReverseVerticalScroll
