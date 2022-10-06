import { connect } from 'react-redux'
import { showMoreStories } from './operations'
import StoryItem from './StoryItem'

// generic flow with backend and redux:
// action: the work being done (reducer)
// reducer: how state should change (store)
// selector: get data out of the store (operation)
// operation: utils for interactions with the back-end, used as a prop (component)
// mapStateToProps: get state from store and use it as a prop (component)
// connect(mapStateToProps, {operation}): link up with state (component)
// event -> ACTION -(dispatch)-(middleware)-> REDUCER -> STORE(state) -(selector)-> update VIEW

function TopStories({ stories, showMoreStories }) {
  return (
    <div>
      <div>
        {stories.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </div>
      <div>
        <button data-cy="show-more" onClick={showMoreStories} type="button">
          Show More
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ topStories }) => ({
  stories: topStories
})

export default connect(mapStateToProps, { showMoreStories })(TopStories)
