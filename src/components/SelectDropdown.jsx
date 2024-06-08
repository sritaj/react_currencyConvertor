const SelectDropdown = ({
  amountDefault,
  onAmountChange,
  currencyDefault,
  onCurrencyChange,
  currencyOptions,
  setChangeStatus,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <input
          type="number"
          id="from-amount"
          className="ps-3 h-8 rounded-l-lg border-2 border-gray-300 hover:border-indigo-500/75 focus:outline-none focus:border-indigo-500 bg-gray-100"
          value={amountDefault}
          onChange={(e) => onAmountChange(parseFloat(e.target.value))}
          onClick={setChangeStatus}
        />
        <select
          id="from-currency"
          className="ps-3 rounded-r-lg h-8 border-2 border-l-0  border-gray-300 hover:border-indigo-500/75 focus:outline-none focus:border-indigo-500 bg-gray-100"
          value={currencyDefault}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {Object.entries(currencyOptions).map(([name, exchange]) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectDropdown;
