import { useState, useEffect } from "react";
import axios from "axios";

const CurrencyConvertor = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  // Utilizing states to set the default value
  const [fromCurrencyDropdown, setFromCurrencyDropdown] = useState("INR");
  const [toCurrencyDropdown, setToCurrencyDropdown] = useState("USD");

  // Utilizing state to set the currencies and exchange rates from the API call
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    const data = axios
      .get(
        "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_k5GVMJvCHChpVZBGFKiHcDqvRzAJodOutZc6WQie"
      )
      .then((response) => {
        setCurrencies(response.data.data);
        //console.log(response.data.data);

        //setFromCurrencyDropdown(Object.keys(response.data.data)(15));
        // console.log(`Test: ${Object.keys(response.data.data)[15]}`); Prints INR
      })
      .catch((error) => {
        console.error("Error fetching details from the API", error);
      });
    console.log(data);
  }, []);

  useEffect(() => {
    showConvertedCurrency();
  }, [toAmount, fromAmount, toCurrencyDropdown, fromCurrencyDropdown]);

  const showConvertedCurrency = () => {
    const convertedCurrency =
      fromAmount *
      (currencies[toCurrencyDropdown] / currencies[fromCurrencyDropdown]);
    setToAmount(convertedCurrency.toFixed(2));
  };

  const resetValues = () => {
    setFromAmount(0);
    setToAmount(0);
    setFromCurrencyDropdown("INR");
    setToCurrencyDropdown("USD");
  };

  return (
    <div className="min-h-screen flex justify-center py-14 bg-gradient-to-r from-sky-500 to-blue-200">
      <div className=" max-w-md bg-white border border-gray-200 rounded-lg shadow p-12 py-12 bg-gradient-to-r from-slate-100 to-slate-200">
        <a>
          <img
            className="rounded-lg"
            src="https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </a>
        <div>
          <h1 className="text-center m-6 text-slate-700 font-serif font-bold text-l">
            Currency Convertor
          </h1>
          <div className="flex flex-col items-center">
            <div>
              <input
                type="number"
                id="from-amount"
                className="ps-3 h-8 rounded-l-lg border-2 border-gray-300 hover:border-indigo-500/75 focus:outline-none focus:border-indigo-500 bg-gray-100"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
              />
              <select
                id="from-currency"
                className="ps-3 rounded-r-lg h-8 border-2 border-l-0  border-gray-300 hover:border-indigo-500/75 focus:outline-none focus:border-indigo-500 bg-gray-100"
                value={fromCurrencyDropdown}
                onChange={(e) => setFromCurrencyDropdown(e.target.value)}
              >
                {Object.entries(currencies).map(([name, exchange]) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <hr className="w-full h-px my-8 bg-amber-600 border-0"></hr>

            <div className="">
              <input
                type="number"
                id="to-amount"
                className="ps-3 h-8 rounded-l-lg border-2 border-gray-300 hover:border-indigo-500/75 focus:outline-none focus:border-indigo-500 bg-gray-100"
                value={toAmount}
                readOnly={true}
              />
              <select
                id="to-currency"
                className="ps-3 rounded-r-lg h-8 border-2 border-l-0  border-gray-300 hover:border-indigo-500/75 focus:outline-none focus:border-indigo-500 bg-gray-100"
                value={toCurrencyDropdown}
                onChange={(e) => setToCurrencyDropdown(e.target.value)}
              >
                {Object.entries(currencies).map(([name, exchange]) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="mt-6 text-center text-nowrap">
            <span className="font-extralight text-sm">
              {fromAmount} {fromCurrencyDropdown} equals {""}
            </span>
            <br></br>
            <span className="text-3xl">
              {toAmount} {toCurrencyDropdown}
            </span>
          </p>

          <div className="mt-6 flex justify-center">
            {/* <button
              id="convert"
              className="text-white bg-blue-700 hover:bg-blue:800 rounded-full px-5 py-1"
              onClick={showConvertedCurrency}
            >
              Convert
            </button> */}
            <button
              id="convert"
              className="text-white bg-blue-600 hover:bg-blue-800 rounded-full px-5 py-1 ring-offset-1 ring-1"
              onClick={resetValues}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
