// [6.2] child components destructure and use the props
// [6.2.1] Consider using default values for props. If the prop isn’t set, the default value will be used
export default function ColorPicker({ colors = [], color, setColor }) {
  return (
    <ul>
      {colors.map((c, i) => (
        <li
          key={i}
          className={color === c ? 'selected' : null}
          style={{ background: c }}
          onClick={() => setColor(c)}
          data-cy={`${c}-${i}`}
        >
          {c}
        </li>
      ))}
    </ul>
  )
}
