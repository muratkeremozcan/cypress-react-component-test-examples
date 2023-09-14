import {createContext} from 'react'

// Define the type for the context
type SimpleContextType = {
  name: string
}

// Create the context with the type and default value
export const SimpleContext = createContext<SimpleContextType>({name: ''})
