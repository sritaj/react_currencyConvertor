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
      });
    console.log(data);
  }, []);

  const showConvertedCurrency = () => {
    const convertedCurrency =
      fromAmount *
      (currencies[toCurrencyDropdown] / currencies[fromCurrencyDropdown]);
    setToAmount(convertedCurrency);
  };

  return (
    <div className=" flex justify-center py-14 bg-gradient-to-r from-sky-500 to-blue-200">
      <div className=" max-w-screen-sm bg-white border border-gray-200 rounded-lg shadow p-40 py-20 bg-gradient-to-r from-slate-100 to-slate-200">
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
          <div className="">
            <div className="">
              <select
                id="from-currency"
                className=" bg-gray-50 border-gray-300 outline outline-offset2 outline-cyan-500/50 rounded w-16"
                value={fromCurrencyDropdown}
                onChange={(e) => setFromCurrencyDropdown(e.target.value)}
              >
                {Object.entries(currencies).map(([name, exchange]) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>

              <input
                type="number"
                id="from-amount"
                className="ml-4 px-2 bg-gray-50 border-gray-300 outline outline-offset2 outline-cyan-500/50 rounded"
                placeholder="0"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <select
                id="to-currency"
                className=" bg-gray-50 border-gray-300 outline outline-offset2 outline-amber-500/50 rounded w-16"
                value={toCurrencyDropdown}
                onChange={(e) => setToCurrencyDropdown(e.target.value)}
              >
                {Object.entries(currencies).map(([name, exchange]) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                id="to-amount"
                className="ml-4 px-2 bg-gray-50 border-gray-300 outline outline-offset2 outline-amber-500/50 rounded"
                placeholder="0"
                value={toAmount}
                readOnly={true}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              id="convert"
              className="text-white bg-blue-700 hover:bg-blue:800 rounded-full px-5 py-1"
              onClick={showConvertedCurrency}
            >
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
