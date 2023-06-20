import styles from './Button.module.css'

type ButtonProps = {
  type: 'primary' | 'secondary'
  label: string
}

export default function Button({ type, label }: ButtonProps): JSX.Element {
  return (
    <button type="button" className={styles[type]}>
      {label}
    </button>
  )
}

/*
if there is trouble with TS importing .module.css, create a file `css-modules.d.ts` with the following content:

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

*/
