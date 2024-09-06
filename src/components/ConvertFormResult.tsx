import { toCurrencyFormat } from "../lib/lib";

export default function ConvertFormResult({
  inputRef,
  inputUnit,
  convertedValue,
}: {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  inputUnit: "IRR" | "USD";
  convertedValue: number | null;
}) {
  if (convertedValue === null) return;
  const value =
    inputRef.current?.value !== undefined ? +inputRef.current?.value : 0;

  return (
    <div
      className={`grid duration-300 mb-3 ${
        convertedValue ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden font-medium">
        <div className="py-2">
          <p className="mb-1 text-sm text-gray-400">
            {toCurrencyFormat(value)}
            {inputUnit === "IRR" ? "ریال" : "دلار"} =
          </p>
          <p>
            {toCurrencyFormat(convertedValue)}{" "}
            {inputUnit === "USD" ? "ریال" : "دلار"}
          </p>
        </div>
      </div>
    </div>
  );
}
