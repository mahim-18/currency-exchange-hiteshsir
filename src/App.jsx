import React, { useState } from 'react'
import './index.css'
import InputBox from './components/InputBox'
import useCurrInfo from './hooks/useCurrInfo'

// function App() {

//   const [amount, setAmount] = useState(0)
//   const [from, setFrom] = useState("usd")
//   const [to, setTo] = useState("inr")
//   const [convertedAmount, setConvertedAmount] = useState(0)

//   const currInfo = useCurrInfo(from) 
//   const options = Object.keys(currInfo)

//   const swap = () => {
//     setFrom(to)
//     setTo(from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)
//   }




//   return (
//     <div
//         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//         style={{
//             backgroundImage: `url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//         }}
//     >
//         <div className="w-full">
//             <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                 <form
//                     onSubmit={(e) => {
//                         e.preventDefault();
//                         convert()
//                     }}
//                 >
//                     <div className="w-full mb-1">
//                         <InputBox
//                             label="From"
//                             amount={amount}
//                             currencyOptions={options}
//                             onCurrChange={(currency) => setTo(currency)}
//                             selectCurrency={from}
//                             onAmountChange={(amount) => setAmount(amount)}
//                         />
//                     </div>
//                     <div className="relative w-full h-0.5">
//                         <button
//                             type="button"
//                             className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                             onClick={swap}
//                         >
//                             swap
//                         </button>
//                     </div>
//                     <div className="w-full mt-1 mb-4">
//                         
//                     </div>
//                     <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                         Convert {from.toUpperCase()} to {to.toUpperCase()}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </div>
// );

// }

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currInfo = useCurrInfo(from);
    const options = Object.keys(currInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    //   const convert = () => {
    //     setConvertedAmount(amount * currInfo[to])
    //   }

    const convert = () => {
        if (currInfo[to]?.value) {
            setConvertedAmount(amount * currInfo[to].value); // `value` is part of the API response structure
        }
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrChange={(currency) => setFrom(currency)} // Corrected
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App