import { connect } from 'react-redux'
import { showMoreStories } from './operations'
import StoryItem from './StoryItem'

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
