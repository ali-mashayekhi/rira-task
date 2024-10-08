import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import { convertToFinal } from "../lib/lib";
import ConvertFormResult from "./ConvertFormResult";
import GetInput from "./GetInput";
import Button from "./UI/Button";

export default function ConvertForm({
  exchangeRate,
  inputUnit,
  setInputUnit,
}: {
  exchangeRate: number | null;
  inputUnit: "IRR" | "USD";
  setInputUnit: Dispatch<SetStateAction<"IRR" | "USD">>;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [convertedValue, setConvertedValue] = useState<number | null>(null);

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    // 1. Check existanse of values
    if (!inputRef.current) return;
    const inputValue = +inputRef.current.value;
    if (inputValue === 0) return;
    if (!exchangeRate) return;

    // 2. Convert to final form
    setConvertedValue(convertToFinal(inputValue, exchangeRate, inputUnit));
  }

  return (
    <form
      className="px-3 py-8 mb-3 bg-white rounded-lg shadow-sm sm:px-10"
      onSubmit={submitHandler}
    >
      <GetInput
        inputUnit={inputUnit}
        setInputUnit={setInputUnit}
        ref={inputRef}
      />
      <ConvertFormResult
        convertedValue={convertedValue}
        inputRef={inputRef}
        inputUnit={inputUnit}
      />
      <Button>تبدیل</Button>
    </form>
  );
}
