const containsName = (color, searchTerm) =>
  color.name.toLowerCase().includes(searchTerm.toLowerCase())

// event -> ACTION -(dispatch)-(middleware)-> REDUCER -> STORE(state) -(selector)-> update VIEW
// [redux7] selectors get state data from the Redux store, derive the data, and pass it as props to the React container components
// selectors take a state as input and produce a slice of the state as output.
// selectors are created in the related reducer file, or their own
// they are consumed at the container components mapStateToProps function while getting the data from the store

export const filterList = ({ list, searchTerm }) =>
  list.filter((color) => containsName(color, searchTerm))
