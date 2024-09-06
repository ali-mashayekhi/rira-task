import { toCurrencyFormat, toDollor, toRial } from "../lib/lib";

export default function ConvertRate({
  exchangeRate,
  inputUnit,
}: {
  exchangeRate: number | null;
  inputUnit: "IRR" | "USD";
}) {
  if (!exchangeRate) return;

  return (
    <div className="self-start px-3 font-medium sm:px-10">
      <p className="text-gray-400">نرخ تبدیل</p>
      {inputUnit === "IRR" ? (
        <p>1 ریال = {toCurrencyFormat(toDollor(1, exchangeRate))} دلار</p>
      ) : (
        <p>1 دلار = {toCurrencyFormat(toRial(1, exchangeRate))} ریال</p>
      )}
    </div>
  );
}
