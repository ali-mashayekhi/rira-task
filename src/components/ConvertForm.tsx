import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import { currencies } from "../constants/constants";
import CurrencySelector from "./CurrencySelector";
import Button from "./UI/Button";
import ConvertFormResult from "./ConvertFormResult";
import { toDollor, toRial } from "../lib/lib";
import SwapUnit from "./SwapUnit";

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

  function submitHandler(
    e: FormEvent,
    setConvertedValue: React.Dispatch<React.SetStateAction<number | null>>
  ) {
    e.preventDefault();
    // 1. Check existanseof values
    if (!inputRef.current) return;
    const inputValue = +inputRef.current.value;
    if (inputValue === 0) return;
    if (!exchangeRate.rate) return;

    // 2. Convert to final form
    if (inputUnit === "IRR") {
      setConvertedValue(toDollor(inputValue, exchangeRate.rate));
    }
    if (inputUnit === "USD") {
      setConvertedValue(toRial(inputValue, exchangeRate.rate));
    }
  }

  return (
    <form
      className="w-full max-w-screen-sm px-10 py-8 mb-3 bg-white rounded-lg shadow-sm"
      onSubmit={(e) => {
        submitHandler(e, setConvertedValue);
      }}
    >
      <div className="flex items-center gap-2 mb-3">
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
        <SwapUnit setInputUnit={setInputUnit} />
        <CurrencySelector
          activeCurrency={currencies.find(
            (currency) => currency.value !== inputUnit
          )}
        />
      </div>
      <ConvertFormResult
        convertedValue={convertedValue}
        inputRef={inputRef}
        inputUnit={inputUnit}
      />
      <Button>تبدیل</Button>
    </form>
  );
}
