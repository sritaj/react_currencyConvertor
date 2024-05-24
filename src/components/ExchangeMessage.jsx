const ExchangeMessage = ({
  fromAmount,
  fromCurrencyDropdown,
  toAmount,
  toCurrencyDropdown,
}) => {
  return (
    <p className="mt-6 text-center text-nowrap">
      <span className="font-extralight text-sm">
        {fromAmount} {fromCurrencyDropdown} equals {""}
      </span>
      <br></br>
      <span className="text-3xl">
        {toAmount} {toCurrencyDropdown}
      </span>
    </p>
  );
};

export default ExchangeMessage;
