// [6.2] child components destructure and use the props
export default function ColorSample({ color }) {
  return color ? (
    <div
      className="colorSample"
      style={{ background: color }}
      data-cy="color-sample"
    />
  ) : null
}
