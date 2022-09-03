import { useState} from 'react'

const Button = ({text, onClick}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Statistics = ({good, neutral, bad}) => {
  if(good || neutral || bad){

    return (
      <div>
        <h1>statistics</h1>
          good {good}<br></br>
          neutral {neutral}<br></br>
          bad {bad}<br></br> 
          all {good + bad + neutral}<br></br> 
          average {(good + bad + neutral)?(good - bad)/(good + bad + neutral):0}<br></br>
          positive {(good + bad + neutral)?100*good/(good + bad + neutral):0} %
      </div>
    )
  }
  else{
    return (
      <div>
        <h1>statistics</h1>
          No feedback given
      </div>
      
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={()=>setGood(good+1)}/>
      <Button text="neutral" onClick={()=>setNeutral(neutral+1)}/>
      <Button text="bad" onClick={()=>setBad(bad+1)}/>
      <Statistics good = {good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
