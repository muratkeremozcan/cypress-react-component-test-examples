import * as React from 'react'
import SamoyedImage from './samoyed.jpg'

export const Dog = () => (
  <div>
    <h1> Your dog is Samoyed: </h1>
    <img src={SamoyedImage} alt="dog" />
  </div>
)

export default Dog
