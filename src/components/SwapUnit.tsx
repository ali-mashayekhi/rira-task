import { Dispatch, SetStateAction } from "react";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";

export default function SwapUnit({
  setInputUnit,
}: {
  setInputUnit: Dispatch<SetStateAction<"IRR" | "USD">>;
}) {
  function swapHandler() {
    setInputUnit((prevState: "IRR" | "USD") =>
      prevState === "IRR" ? "USD" : "IRR"
    );
  }
  return (
    <button onClick={swapHandler}>
      <SwapHorizontalCircleIcon
        className="text-blue-500 duration-300 hover:text-blue-400"
        fontSize="large"
      />
    </button>
  );
}
