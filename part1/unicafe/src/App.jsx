import { useState } from 'react'
import Button from './Button'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good"/>
      <Button text="Neutral"/>
      <Button text="Bad"/>
      <h2>Statictics</h2>
    </div>
  )
}

export default App