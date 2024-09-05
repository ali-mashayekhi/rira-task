import { useState } from "react";
import ConvertForm from "./components/ConvertForm";
import ConvertRate from "./components/ConvertRate";
import useConvertRate from "./hooks/use-convert-rate";

export default function App() {
  const { data: exchangeRate, pending, error } = useConvertRate();
  const [inputUnit, setInputUnit] = useState<"IRR" | "USD">("IRR");

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      <div>
        <ConvertForm
          exchangeRate={exchangeRate.rate}
          inputUnit={inputUnit}
          setInputUnit={setInputUnit}
        />

        {pending && <p>در حال دریافت اطلاعات...</p>}
        {error && <p>خطا در برقراری ارتباط لطفا دوباره تلاش کنید</p>}
        {exchangeRate.rate && (
          <ConvertRate exchangeRate={exchangeRate.rate} inputUnit={inputUnit} />
        )}
      </div>
    </main>
  );
}
