import React from 'react';

function InputBox() {
  return (
    <div className="bg-stone-800 rounded-xl p-4 m-4 w-full max-w-md shadow-lg">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          className="bg-orange-300 text-black text-center rounded-full p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          type="number"
          placeholder="Enter amount"
        />
        <select className="bg-white text-black rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
      </div>
    </div>
  );
}

export default InputBox;
