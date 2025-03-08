import { useState ,useEffect} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(true)

  useEffect(()=>
  {
    document.body.style.backgroundColor=count?"white":"black";
  },[count])

  return (
    <>
    <button onClick={()=>setCount(!count)}>Switch Theme
    </button>
  </>
  )
}

export default App