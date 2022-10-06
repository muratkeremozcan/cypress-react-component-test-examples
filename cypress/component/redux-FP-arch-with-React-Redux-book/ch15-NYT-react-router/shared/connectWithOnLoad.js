import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function connectWithOnLoad(mapStateToProps, mapDispatch, createOnLoadAction) {
  return !createOnLoadAction
    ? connect(mapStateToProps, mapDispatch)
    : function (Component) {
        return connect(
          mapStateToProps,
          mapDispatch
        )(function (props) {
          const { dispatch } = props

          useEffect(() => {
            const onLoadAction = createOnLoadAction(props)
            dispatch(onLoadAction)
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [])

          return <Component {...props} />
        })
      }
}

export default connectWithOnLoad
