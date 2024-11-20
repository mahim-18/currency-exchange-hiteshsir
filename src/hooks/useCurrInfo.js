// // making custom hooks
import {useState, useEffect} from "react"


// function useCurrInfo (currency) {
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_x8sOOzCEKsHlJwd1njSWgN2VBwHZBi5g1arru66L&currencies=${currency}`)
//         .then((res) => res.json())
//         .then((res) => setData(res))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }


function useCurrInfo(currency) {
    const [rates, setRates] = useState({});
    useEffect(() => {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_x8sOOzCEKsHlJwd1njSWgN2VBwHZBi5g1arru66L`) // Fetching a predefined set of currencies
            .then((res) => res.json())
            .then((res) => {
                if (res && res.data) {
                    setRates(res.data);
                }
            })
            .catch((err) => console.error(err));
    }, [currency]);
    return rates; // Return only the rates
}

export default useCurrInfo