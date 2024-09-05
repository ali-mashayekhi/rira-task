export default function ConvertRate({
  exchangeRate,
  inputUnit,
}: {
  exchangeRate: number | null;
  inputUnit: "IRR" | "USD";
}) {
  if (!exchangeRate) return;

  return (
    <div className="self-start px-10 font-medium">
      <p className="text-gray-400">نرخ تبدیل</p>
      {inputUnit === "IRR" ? (
        <p>1 ریال = {(1 * (1 / exchangeRate)).toFixed(8)} دلار</p>
      ) : (
        <p>1 دلار = {(1 * exchangeRate).toFixed(2)} ریال</p>
      )}
    </div>
  );
}
