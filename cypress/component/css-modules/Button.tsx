import styles from './Button.module.css'

type ButtonProps = {
  type: 'primary' | 'secondary'
  label: string
}

export default function Button({ type, label }: ButtonProps) {
  return <button className={styles[type]}>{label}</button>
}
