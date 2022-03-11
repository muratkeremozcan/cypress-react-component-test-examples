let i = 0
/** an expensive anagram algorithm */
export function getAnagrams(source) {
  console.log(`called the function ${++i} times`)
  if (source.length < 2) {
    return [...source]
  }
  const anagrams = []
  const letters = [...source]

  letters.forEach((letter, i) => {
    const without = [...letters]
    without.splice(i, 1)
    getAnagrams(without).map((anagram) => anagrams.push(letter + anagram))
  })

  return anagrams
}

export function getDistinct(anagrams) {
  return [...new Set(anagrams)]
}
