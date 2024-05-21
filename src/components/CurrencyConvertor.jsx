import { useState, useEffect } from "react";
import axios from "axios";

const CurrencyConvertor = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  const [fromCurrencyDropdown, setFromCurrencyDropdown] = useState(["INR"]);
  const [toCurrencyDropdown, setToCurrencyDropdown] = useState("USD");

  const [currencies, setCurrencies] = useState([]);
  const [exchangeRate, setExchangeRates] = useState([]);

  useEffect(() => {
    const data = axios
      .get(
        "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_k5GVMJvCHChpVZBGFKiHcDqvRzAJodOutZc6WQie"
      )
      .then((response) => {
        setCurrencies(response.data),
          setFromCurrencyDropdown(response.data[18]);
      });
    console.log(data);
  }, [fromCurrencyDropdown, toCurrencyDropdown]);

  return (
    <div className="w-full flex justify-center">
      <div>
        <h1 className="text-center mt-6 text-cyan-700 font-serif">
          Currency Convertor
        </h1>
        <div className="mt-6">
          <select
            id="from-currency"
            className=" bg-gray-50 border-gray-300 outline outline-offset2 outline-cyan-500/50 rounded w-16"
            defaultValue={fromCurrencyDropdown}
            onChange={(e) => setFromCurrencyDropdown(e.target.value)}
          ></select>
          <input
            type="number"
            id="from-amount"
            className="ml-4 px-2 bg-gray-50 border-gray-300 outline outline-offset2 outline-cyan-500/50 rounded"
            placeholder="0"
            value={fromAmount}
          />
        </div>
        <div className="mt-6">
          <select
            id="to-currency"
            className=" bg-gray-50 border-gray-300 outline outline-offset2 outline-amber-500/50 rounded w-16"
          ></select>
          <input
            type="number"
            id="to-amount"
            className="ml-4 px-2 bg-gray-50 border-gray-300 outline outline-offset2 outline-amber-500/50 rounded"
            placeholder="0"
            value={toAmount}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <button
            id="convert"
            className="text-white bg-blue-700 hover:bg-blue:800 rounded-full px-5 py-1"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
