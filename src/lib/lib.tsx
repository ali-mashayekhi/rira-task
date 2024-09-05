export function toDollor(inputValue: number, exchangeRate: number) {
  return inputValue * (1 / exchangeRate);
}
export function toRial(inputValue: number, exchangeRate: number) {
  return inputValue * exchangeRate;
}
