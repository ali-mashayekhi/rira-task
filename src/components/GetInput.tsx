import { Dispatch, forwardRef, LegacyRef, SetStateAction } from "react";
import { getInputPlaceHolder, getInputUnit, getOutputUnit } from "../lib/lib";
import CurrencySelector from "./CurrencySelector";
import SwapUnit from "./SwapUnit";

export default forwardRef(function GetInput(
  {
    inputUnit,
    setInputUnit,
  }: {
    inputUnit: "IRR" | "USD";
    setInputUnit: Dispatch<SetStateAction<"IRR" | "USD">>;
  },
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="bg-white flex h-14 items-center justify-between border-[rgb(221, 221, 221)] border-[1px] rounded-md focus-within:border-blue-500 px-2 grow w-full">
        <input
          className="w-full h-12 text-sm bg-white md:text-base focus:outline-none remove-arrow"
          ref={ref}
          type="number"
          placeholder={getInputPlaceHolder(inputUnit)}
        />
        <CurrencySelector activeCurrency={getInputUnit(inputUnit)} />
      </div>
      <SwapUnit setInputUnit={setInputUnit} />
      <CurrencySelector activeCurrency={getOutputUnit(inputUnit)} />
    </div>
  );
});
