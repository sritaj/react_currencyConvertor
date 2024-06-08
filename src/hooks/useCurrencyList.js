import axios from "axios";
import { useEffect, useState } from "react";

const useCurrencyList = () => {
  // Utilizing state to set the currencyOptions and exchange rates from the API call
  const [currencyOptions, setCurrencyOptions] = useState({});

  useEffect(() => {
    const data = axios
      .get(
        "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_k5GVMJvCHChpVZBGFKiHcDqvRzAJodOutZc6WQie"
      )
      .then((response) => {
        setCurrencyOptions(response.data.data);

        //setFromCurrencyDropdown(Object.keys(response.data.data)(15));
        // console.log(`Test: ${Object.keys(response.data.data)[15]}`); Prints INR
      })
      .catch((error) => {
        console.error("Error fetching details from the API", error);
      });
  }, []);

  return currencyOptions;
};

export default useCurrencyList;
