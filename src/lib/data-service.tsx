export default async function getConvertRate() {
  const response = await fetch(
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }
  const result = await response.json();

  return result;
}
