import useRandomGreeting from './use-random-greeting'

export default function SayHello() {
  const nextTitle = useRandomGreeting(['Hello', 'Ciao', 'Hola', 'こんにちは'])

  return <button onClick={nextTitle}>Say Hi</button>
}
