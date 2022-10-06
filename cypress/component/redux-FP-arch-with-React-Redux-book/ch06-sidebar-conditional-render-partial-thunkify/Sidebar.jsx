import { connect } from 'react-redux'
import { toggleSidebar } from './actions'

function SidebarOpened({ toggleSidebar, children }) {
  return (
    <div data-cy="sidebar-opened" className="side-bar-opened">
      <button onClick={toggleSidebar}>&lt;</button>
      <div>{children}</div>
    </div>
  )
}

function SidebarClosed({ toggleSidebar }) {
  return (
    <div data-cy="sidebar-closed" className="side-bar-closed">
      <button onClick={toggleSidebar}>&gt;</button>
    </div>
  )
}

function Sidebar({ show, toggleSidebar, children }) {
  return (
    <div className="side-bar">
      {show ? (
        <SidebarOpened toggleSidebar={toggleSidebar} children={children} />
      ) : (
        <SidebarClosed toggleSidebar={toggleSidebar} />
      )}
    </div>
  )
}

function mapStateToProps(show) {
  return {
    show
  }
}

// connect the component to the store
export default connect(mapStateToProps, { toggleSidebar })(Sidebar)
