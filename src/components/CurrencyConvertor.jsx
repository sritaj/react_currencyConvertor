import { useState, useEffect } from "react";
import axios from "axios";
import SelectDropdown from "./SelectDropdown";

const CurrencyConvertor = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  // Utilizing states to set the default value
  const [fromCurrencyDropdown, setFromCurrencyDropdown] = useState("INR");
  const [toCurrencyDropdown, setToCurrencyDropdown] = useState("USD");

  // Utilizing state to set the currencyOptions and exchange rates from the API call
  const [currencyOptions, setCurrencyOptions] = useState({});

  useEffect(() => {
    const data = axios
      .get(
        "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_k5GVMJvCHChpVZBGFKiHcDqvRzAJodOutZc6WQie"
      )
      .then((response) => {
        setCurrencyOptions(response.data.data);
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
      (currencyOptions[toCurrencyDropdown] /
        currencyOptions[fromCurrencyDropdown]);
    setToAmount(convertedCurrency.toFixed(2));
  };

  const resetValues = () => {
    setFromAmount(0);
    setToAmount(0);
    setFromCurrencyDropdown("INR");
    setToCurrencyDropdown("USD");
  };

  const swapFields = () => {
    setToAmount(fromAmount);
    setFromAmount(toAmount);
    setToCurrencyDropdown(fromCurrencyDropdown);
    setFromCurrencyDropdown(toCurrencyDropdown);
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

          <SelectDropdown
            amountDefault={fromAmount}
            onAmountChange={setFromAmount}
            currencyDefault={fromCurrencyDropdown}
            onCurrencyChange={setFromCurrencyDropdown}
            currencyOptions={currencyOptions}
          />

          <div className="relative inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-amber-600 border-0"></hr>
            <div className="absolute px-4 -translate-x-1/2  left-1/2">
              <button
                className="text-white bg-orange-500 hover:bg-orange-700 rounded-full px-2 py-1 ring-offset-1 ring-1 ring-orange-500 ring-offset-orange-400 align-middle"
                onClick={swapFields}
              >
                <svg
                  className="w-6 h-6 mr-0 fill-current stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 7l4-4 4 4M12 3v18" />

                  <path d="M16 17l-4 4-4-4M12 21V3" />
                </svg>
              </button>
            </div>
          </div>

          <SelectDropdown
            amountDefault={toAmount}
            onAmountChange={setToAmount}
            currencyDefault={toCurrencyDropdown}
            onCurrencyChange={setToCurrencyDropdown}
            currencyOptions={currencyOptions}
          />
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
  );
};

export default CurrencyConvertor;
