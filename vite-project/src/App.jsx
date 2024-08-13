import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCount from './componetes/sec-caunt/count.jsx'

function App() {
  const[count,setCount]=useState(0)

  const addValue=()=>{
      if(count != 20){
          setCount(count + 1)
      }
      // setCount(count + 1)
  }
  const mainis=()=>{
      if(count > 0){
          setCount(count - 1)
      }
    
  }
  return (
    <>
     <MyCount count={count}   add={addValue} mai={mainis}/>
    
    </>
  )
}

export default App
