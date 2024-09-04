import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import { currencies } from "../constants/constants";
import CurrencySelector from "./CurrencySelector";
import Button from "./UI/Button";

export default function ConvertForm({
  exchangeRate,
  inputUnit,
  setInputUnit,
}: {
  exchangeRate: { rate: null | number };
  inputUnit: "IRR" | "USD";
  setInputUnit: Dispatch<SetStateAction<"IRR" | "USD">>;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [convertedValue, setConvertedValue] = useState<number | null>(null);

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    if (!inputRef.current) return;
    const inputValue = +inputRef.current.value;
    if (inputValue === 0) return;

    if (inputUnit === "IRR") {
      if (!exchangeRate.rate) return;
      setConvertedValue(inputValue * (1 / exchangeRate.rate));
    }
    if (inputUnit === "USD") {
      if (!exchangeRate.rate) return;
      setConvertedValue(inputValue * exchangeRate.rate);
    }
  }

  function swapHandler() {
    setInputUnit((prevState: "IRR" | "USD") =>
      prevState === "IRR" ? "USD" : "IRR"
    );
  }

  return (
    <form
      className="bg-white max-w-screen-sm w-full px-10 py-8 rounded-lg shadow-sm mb-3"
      onSubmit={submitHandler}
    >
      <div className="flex gap-2 items-center mb-3">
        <div className="bg-white flex h-16 items-center justify-between border-[rgb(221, 221, 221)] border-[1px] rounded-md focus-within:border-blue-500 px-2">
          <input
            className="bg-white h-14 focus:outline-none remove-arrow"
            ref={inputRef}
            type="number"
            placeholder={
              inputUnit === "IRR" ? "مقدار به ریال" : "مقدار به دلار"
            }
          />
          <CurrencySelector
            activeCurrency={currencies.find(
              (currency) => currency.value === inputUnit
            )}
          />
        </div>
        <button onClick={swapHandler}>
          <SwapHorizontalCircleIcon
            className="text-blue-500 hover:text-blue-400 duration-300"
            fontSize="large"
          />
        </button>
        <CurrencySelector
          activeCurrency={currencies.find(
            (currency) => currency.value !== inputUnit
          )}
        />
      </div>
      <div
        className={`grid duration-300 mb-3 ${
          convertedValue ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden font-medium">
          <p className="text-sm text-gray-400">
            {inputRef.current?.value}
            {inputUnit === "IRR" ? "ریال" : "دلار"} =
          </p>
          <p>
            {convertedValue?.toFixed(inputUnit === "USD" ? 2 : 8)}{" "}
            {inputUnit === "USD" ? "ریال" : "دلار"}
          </p>
        </div>
      </div>
      <Button>تبدیل</Button>
    </form>
  );
}
