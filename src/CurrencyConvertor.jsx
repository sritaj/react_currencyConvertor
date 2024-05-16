const CurrencyConvertor = () => {
  return (
    <div className="w-full flex justify-center">
      <div>
        <h1 className="text-center mt-6 text-cyan-700 font-serif">
          Currency Convertor
        </h1>
        <div className="mt-6">
          <select></select>
          <input
            type="number"
            id="number-input"
            className="ml-4 px-2 bg-gray-50 border-gray-300 outline outline-offset2 outline-cyan-500/50 rounded"
            placeholder="0"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
