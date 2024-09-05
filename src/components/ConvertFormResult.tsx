export default function ConvertFormResult({
  inputRef,
  inputUnit,
  convertedValue,
}: {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  inputUnit: "IRR" | "USD";
  convertedValue: number | null;
}) {
  return (
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
  );
}
