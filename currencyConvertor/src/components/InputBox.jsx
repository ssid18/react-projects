import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()

    return (
        <div className={`bg-white/80 p-4 rounded-xl text-sm flex items-center justify-between shadow-md ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-gray-600 mb-2 inline-block font-medium">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-2 text-gray-900 font-semibold"
                    type="number"
                    placeholder="Enter amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-col items-end text-right">
                <p className="text-gray-600 mb-2 font-medium">Currency</p>
                <select
                    className="rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none font-semibold text-gray-900"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency} className="text-gray-900">
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>

            </div>
        </div>
    )
}

export default InputBox 