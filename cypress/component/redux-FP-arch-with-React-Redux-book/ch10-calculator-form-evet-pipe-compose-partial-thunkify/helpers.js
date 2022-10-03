import pipe from 'lodash/flow';

function getInputChange(e){
    return Object.freeze({
        name: e.target.name,
        value: e.target.value
    });
}

function withChange(callback){
    return pipe(
        getInputChange,
        callback
    )
}

function preventDefault(e){
    e.preventDefault();
    return e
}

export { getInputChange, withChange, preventDefault };