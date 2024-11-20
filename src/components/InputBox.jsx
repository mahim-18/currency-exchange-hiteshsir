import React from 'react'
import { useId } from 'react';

function InputBox({
    // PROPS FUNCTIONALITIES :-

    label, // Allows you to customize the label text for the input field. For example: label="Enter Amount".
    amount, // current value of the input field
    onCurrChange, // when the currency dropdown (select) value changes.
    onAmountChange, // when the value in the input field changes.
    currencyOptions = [], // An array of currency options for the dropdown. Example: currencyOptions={['USD', 'EUR', 'GBP']} 
    selectCurrency = "usd", // The default or currently selected currency in the dropdown. Example: selectCurrency="EUR"
    amountDisabled = false, // A boolean to enable/disable the input field.
    currencyDisabled = false, // A boolean to enable/disable the currency dropdown.

    className = "", // pass custom styles or classes to the component.
}) {

    const amountInputId = useId() // a unique value is assigned

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // agar onAmountChange available hai toh hum ise use karenge
                    id={amountInputId}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                disabled={currencyDisabled}
                value={selectCurrency}
                onChange={(e) => onCurrChange && onCurrChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency}
                        value={currency}>
                        {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

