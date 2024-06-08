import { useState, useEffect } from "react";
import SelectDropdown from "./SelectDropdown";
import ExchangeMessage from "./ExchangeMessage";
import { ResetButton, Swap } from "./ActionButtons";
import backgroundImage from "../assets/background_wallpaper.jpg";
import Lottie from "react-lottie";
import animationData from ".././lotties/lotties_currency";
import useCurrencyList from "../hooks/useCurrencyList";

const CurrencyConvertor = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  // Utilizing states to set the default value
  const [fromCurrencyDropdown, setFromCurrencyDropdown] = useState("INR");
  const [toCurrencyDropdown, setToCurrencyDropdown] = useState("USD");

  const currencyOptions = useCurrencyList();

  // Tracking which amount field was last updated for currency conversion
  const [lastChanged, setLastChanged] = useState("from");

  const setFromAmountStatus = () => {
    setLastChanged("from");
  };

  const setToAmountStatus = () => {
    setLastChanged("to");
  };

  useEffect(() => {
    showConvertedCurrency();
  }, [toAmount, fromAmount, toCurrencyDropdown, fromCurrencyDropdown]);

  const showConvertedCurrency = () => {
    if (
      currencyOptions &&
      currencyOptions[fromCurrencyDropdown] &&
      currencyOptions[toCurrencyDropdown]
    ) {
      if (lastChanged === "from") {
        const convertedCurrency =
          fromAmount *
          (currencyOptions[toCurrencyDropdown] /
            currencyOptions[fromCurrencyDropdown]);
        setToAmount(convertedCurrency.toFixed(2));
      } else {
        const convertedCurrency =
          toAmount *
          (currencyOptions[fromCurrencyDropdown] /
            currencyOptions[toCurrencyDropdown]);
        setFromAmount(convertedCurrency.toFixed(2));
      }
    }
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

  const currencyAnimation = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="w-full min-h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-md w-full rounded-2xl border-2 border-white shadow p-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div>
          <h1 className="text-center my-2  text-slate-700 font-serif font-bold text- text-2xl">
            Currency Convertor
          </h1>
          {/* <a>
          <img
            className="rounded-lg"
            src="https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </a> */}
          <Lottie options={currencyAnimation} height={300} width={300} />

          <SelectDropdown
            amountDefault={fromAmount}
            onAmountChange={setFromAmount}
            currencyDefault={fromCurrencyDropdown}
            onCurrencyChange={setFromCurrencyDropdown}
            currencyOptions={currencyOptions}
            setChangeStatus={setFromAmountStatus}
          />

          <Swap swapFields={swapFields} />

          <SelectDropdown
            amountDefault={toAmount}
            onAmountChange={setToAmount}
            currencyDefault={toCurrencyDropdown}
            onCurrencyChange={setToCurrencyDropdown}
            currencyOptions={currencyOptions}
            setChangeStatus={setToAmountStatus}
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
