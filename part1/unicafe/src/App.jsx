import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  let total = good + neutral + bad
  const suffix = "%"

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />  
      <Statistics good={good} neutral={neutral} bad={bad} total={total} suffix={suffix} />
    </div>
  )
}

export default App
