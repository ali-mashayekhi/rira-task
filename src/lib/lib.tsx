import { currencies } from "../constants/constants";

export function toDollor(inputValue: number, exchangeRate: number) {
  return inputValue * (1 / exchangeRate);
}
export function toRial(inputValue: number, exchangeRate: number) {
  return inputValue * exchangeRate;
}

export function getInputPlaceHolder(inputUnit: "IRR" | "USD") {
  return inputUnit === "IRR" ? "مقدار به ریال" : "مقدار به دلار";
}

export function getInputUnit(inputUnit: "IRR" | "USD") {
  return currencies.find((currency) => currency.value === inputUnit);
}
export function getOutputUnit(inputUnit: "IRR" | "USD") {
  return currencies.find((currency) => currency.value !== inputUnit);
}
