import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    const numericAmount = parseFloat(amount) || 0;
    setConvertedAmount(numericAmount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('http://i.pinimg.com/736x/4b/be/2d/4bbe2d1515e36fd2719b15e17af3f07a.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-2xl shadow-lg p-6 backdrop-blur-md bg-white/20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* From box */}
            <div className="w-full mb-3">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>

            {/* Swap button */}
            <div className="relative w-full flex items-center justify-center my-4">
              <div className="w-full h-px bg-gray-300"></div>
              <button
                type="button"
                className="absolute bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1 rounded-full shadow-md transition"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* To box */}
            <div className="w-full mt-3 mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert button */}
            <button
              type="submit"
              onClick={convert}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold px-4 py-3 rounded-xl shadow-lg hover:scale-[1.02] transition"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default App
