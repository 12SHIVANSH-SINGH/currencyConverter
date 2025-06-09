import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Export from './components/Export'
import InputBox from './components/InputBox'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='bg-black h-screen w-full text-white rounded p-2 flex flex-col items-center justify-center space-y-4 '>
        <h1>CURRENCY CONVERTER</h1>
          <InputBox/>
          <button className='bg-blue-400 p-2 m-3 rounded-3xl w-40 hover:bg-blue-600 cursor-pointer active:bg-blue-800'>Swap</button>
          <InputBox/>
       </div>
    </>
  )
}

export default App
