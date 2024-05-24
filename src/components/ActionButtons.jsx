export const ResetButton = ({ resetValues }) => {
  return (
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
  );
};

export const Swap = ({ swapFields }) => {
  return (
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
  );
};
