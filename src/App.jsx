import { useState } from 'react'
import Counter from './counter/Counter'

function App() {
  let [count, setCount] = useState(0)
  const changcounter=()=>{
    setCount(count+1)

  }

  return (
    <>
     <button onClick={changcounter}>sereenkh:){count}</button>
    </>
  )
}

export default App
