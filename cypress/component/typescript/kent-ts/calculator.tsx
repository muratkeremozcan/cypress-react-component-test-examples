// kentcdodds.com/blog/how-to-write-a-react-component-in-typescript

const operations = {
  '+': (left: number, right: number): number => left + right,
  '-': (left: number, right: number): number => left - right,
  '*': (left: number, right: number): number => left * right,
  '/': (left: number, right: number): number => left / right
}

type CalculatorProps = {
  left: number
  operator: keyof typeof operations
  right: number
}

// don't use React.FC (or its longer alias React.FunctionComponent)
// 1 Even when the component doesn't have children, and we have a children property
// 2 You can't use generics. Not super common, but definitely a downside.
// 3 We have to use a function expression and can't use a function declaration.
// https://github.com/facebook/create-react-app/pull/8177
// The prop type is enough.

// And, no return type is needed https://twitter.com/nickemccurdy/status/1365384372908621833
// a common anti-pattern is explicitly setting a return type that’s too wide.
// For example if you use React.FC (which you shouldn’t use)
// the return type will always be something like ReactElement
// even if the component returns a more specific type like a string
export default function Calculator({ left, operator, right }: CalculatorProps) {
  const result = operations[operator](left, right)
  return (
    <div>
      <code>
        {left} {operator} {right} = <output>{result}</output>
      </code>
    </div>
  )
}
