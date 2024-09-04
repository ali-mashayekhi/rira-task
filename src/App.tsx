import { useState } from "react";
import ConvertForm from "./components/ConvertForm";
import ConvertRate from "./components/ConvertRate";
import useConvertRate from "./hooks/use-convert-rate";

export default function App() {
  const exchangeRate = useConvertRate();
  const [inputUnit, setInputUnit] = useState<"IRR" | "USD">("IRR");

  return (
    <main className="bg-gray-100 w-screen h-screen flex justify-center items-center flex-col">
      <div>
        <ConvertForm
          exchangeRate={exchangeRate.data}
          inputUnit={inputUnit}
          setInputUnit={setInputUnit}
        />

        {exchangeRate.pending ? (
          <p>در حال دریافت اطلاعات...</p>
        ) : (
          <ConvertRate exchangeRate={exchangeRate.data} inputUnit={inputUnit} />
        )}
      </div>
    </main>
  );
}
