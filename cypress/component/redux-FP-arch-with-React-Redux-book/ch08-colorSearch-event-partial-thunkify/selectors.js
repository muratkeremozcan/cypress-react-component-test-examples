const containsName = (color, searchTerm) =>
  color.name.toLowerCase().includes(searchTerm.toLowerCase())

// A selector is a function that accepts all the state as an argument
// and returns parts of that data or computes derived values from it.

export const filterList = ({ list, searchTerm }) =>
  list.filter((color) => containsName(color, searchTerm))
