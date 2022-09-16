import { useState} from 'react'

const Button = ({text, onClick}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const StatisticLine = ({text,value}) => (
    <div>
      {text} {value} <br></br>
    </div>

)

const Statistics = ({good, neutral, bad}) => {
  if(good || neutral || bad){
    return (
      <div>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value= {good + bad + neutral}/>
          <StatisticLine text="average" value= {(good + bad + neutral)?(good - bad)/(good + bad + neutral):0}/>
          <StatisticLine text="positive" value= {(good + bad + neutral)?100*good/(good + bad + neutral):0}/>
      </div>
    )
  }
  else{
    return (
      <div>
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
      <h1>statistics</h1>
      <Statistics good = {good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
