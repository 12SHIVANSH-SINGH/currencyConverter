import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Export from './components/Export'
import InputBox from './components/InputBox'
import useCurrency from './hooks/useCurrency.js'
function App() {
  
  const [from,setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount,setAmount]=useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0);
  const rates = useCurrency(from);
  const items=Object.keys(rates);
  console.log(items);

  // swap functionality
  const swap = () =>{
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setTo(from);
    setFrom(to);
  }
  // convert functionality
  
    const convert = useEffect(()=>{
      setConvertedAmount(amount*rates[to]);
    },[amount,swap]); // this will give the user a real time effect of calculating the change as each time the amount is changed it triggers the recalculcultion and when swap function is called then also

  // this is the power of useEffect as it helps to automatically do the things
  
  return (
    <>
       <div className='bg-[url(https://t4.ftcdn.net/jpg/11/79/82/83/360_F_1179828334_SpqGKsgKkozKltDntgKXNEAotGG7N47N.jpg)] h-screen w-full text-white rounded p-2 flex flex-col items-center justify-center space-y-4 '>
        <h1 className='text-4xl font-stretch-ultra-condensed font-bold'>CURRENCY CONVERTER</h1>
          <InputBox
          items={items}
          amount={amount}
          currency={from}
          onCurrencyChange={setFrom}
          onAmountChange={setAmount}
          />
          <button onClick={swap} className='bg-blue-400 p-2 m-3 rounded-3xl w-40 hover:bg-blue-600 cursor-pointer active:bg-blue-800'>Swap</button>
          <InputBox
            items={items}
            amount={convertedAmount}
            currency={to}
            onAmountChange={setConvertedAmount}
            onCurrencyChange={setTo}
            change={true}
          />
          <button onClick={convert} className='bg-[url(https://media.istockphoto.com/id/474033552/photo/fabric-texture-background-in-various-tones-of-purple.jpg?s=612x612&w=0&k=20&c=tvhw8sOCV0P25Uhbmo7kX9ujhofz47e3tqqwdVkpafw=)] p-2 m-3 rounded-3xl w-40 cursor-pointer '>Convert {from} to {to}</button>
       </div>
    </>
  )
}

export default App
