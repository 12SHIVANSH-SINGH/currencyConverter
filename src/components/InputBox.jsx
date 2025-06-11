import React from 'react';

function InputBox({items=["usd"], label="", amount, currency="usd", change, onAmountChange, onCurrencyChange}) {
  return (
    <div className="bg-stone-800 rounded-xl p-4 m-4 w-full max-w-md shadow-lg">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <h1>{label}</h1>
        <input
          className="bg-orange-300 text-black text-center rounded-full p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          type="number"
          placeholder="Enter amount"
          value={amount}
          readOnly={change} // hangeable or not 
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)} // what happens when anything changes inside of it
        />
        <select className="bg-white text-black rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={currency}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {
            items.map((cur)=>(
                <option key={cur} value={cur}>{cur}</option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default InputBox;
