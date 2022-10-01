import { connect } from 'react-redux'
import { toggleSidebar } from './actions'

function OtherView({ toggleSidebar }) {
  return (
    <div>
      <button data-cy="toggle" onClick={toggleSidebar}>
        Toggle
      </button>
    </div>
  )
}

// connect the component to the store
export default connect(null, { toggleSidebar })(OtherView)
