import React, {useEffect} from 'react';
import { connect } from 'react-redux';

function connectWithOnLoad(
    mapState, 
    mapDispatch, 
    createOnLoadAction) {
    return !createOnLoadAction
    ? connect(mapState, mapDispatch)
    : function(Component){
        return connect(mapState, mapDispatch)(function(props){
            const {dispatch} = props;

            useEffect(() => { 
                const onLoadAction = createOnLoadAction(props);
                dispatch(onLoadAction);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            },[]);

            return <Component {...props} />
        });
    }
}

export default connectWithOnLoad;
