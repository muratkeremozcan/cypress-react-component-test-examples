export default function StoryItem({ story }) {
  return (
    <div data-cy={`story-${story.id}`}>
      <div>{story.title}</div>
    </div>
  )
}
