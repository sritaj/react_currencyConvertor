import { useState, useEffect } from "react";
import axios from "axios";
import SelectDropdown from "./SelectDropdown";
import ExchangeMessage from "./ExchangeMessage";
import { ResetButton, Swap } from "./ActionButtons";
import backgroundImage from "../assets/background_wallpaper.jpg";

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
        // console.log(response.data.data);

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
    <div
      className="w-full h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-md h-fit rounded-2xl border-2 border-white shadow p-12 bg-gradient-to-r from-blue-50 to-blue-100">
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

          <Swap swapFields={swapFields} />

          <SelectDropdown
            amountDefault={toAmount}
            onAmountChange={setToAmount}
            currencyDefault={toCurrencyDropdown}
            onCurrencyChange={setToCurrencyDropdown}
            currencyOptions={currencyOptions}
          />
        </div>

        <ExchangeMessage
          fromAmount={fromAmount}
          fromCurrencyDropdown={fromCurrencyDropdown}
          toAmount={toAmount}
          toCurrencyDropdown={toCurrencyDropdown}
        />

        <ResetButton resetValues={resetValues} />
      </div>
    </div>
  );
};

export default CurrencyConvertor;
