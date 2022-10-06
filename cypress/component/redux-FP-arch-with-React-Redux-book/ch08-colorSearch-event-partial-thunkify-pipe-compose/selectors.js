const containsName = (color, searchTerm) =>
  color.name.toLowerCase().includes(searchTerm.toLowerCase())

// event -> ACTION -(dispatch)-(middleware)-> REDUCER -> STORE(state) -(selector)-> update VIEW
// A selector is a function that accepts all the state as an argument
// and returns parts of that data or computes derived values from it.

export const filterList = ({ list, searchTerm }) =>
  list.filter((color) => containsName(color, searchTerm))
