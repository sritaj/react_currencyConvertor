const CurrencyConvertor = () => {
  return (
    <div className="w-full flex justify-center">
      <div>
        <h1 className="text-center mt-6 text-cyan-700 font-serif">
          Currency Convertor
        </h1>
        <div className="mt-6">
          <select
            id="currency-1"
            className=" bg-gray-50 border-gray-300 outline outline-offset2 outline-cyan-500/50 rounded w-16"
          ></select>
          <input
            type="number"
            id="number-input-1"
            className="ml-4 px-2 bg-gray-50 border-gray-300 outline outline-offset2 outline-cyan-500/50 rounded"
            placeholder="0"
          ></input>
        </div>
        <div className="mt-6">
          <select
            id="currency-2"
            className=" bg-gray-50 border-gray-300 outline outline-offset2 outline-amber-500/50 rounded w-16"
          ></select>
          <input
            type="number"
            id="number-input-2"
            className="ml-4 px-2 bg-gray-50 border-gray-300 outline outline-offset2 outline-amber-500/50 rounded"
            placeholder="0"
          ></input>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="text-white bg-blue-700 hover:bg-blue:800 rounded-lg px-5 py-1">
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
