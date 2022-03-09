// [6.2] child components destructure and use the props
export default function ColorChoiceText({ color }) {
  // [6.3] Check for undefined or null prop values. Return alternative UI if appropriate
  return color ? (
    <p>The selected color is {color}</p>
  ) : (
    <p>No color has been selected</p>
  )
}
