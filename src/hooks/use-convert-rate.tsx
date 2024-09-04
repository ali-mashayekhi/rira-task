import { useEffect, useState } from "react";

export default function useConvertRate() {
  const [data, setData] = useState<{ rate: null | number }>({ rate: null });
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const result = await response.json();
      setData({ rate: (+result.usd.irr + 17646) * 10 });
      setPending(false);
    } catch (error) {
      if (typeof error === "string") {
        setError(error);
      } else if (error instanceof Error) {
        setError(error.message);
      }
      setPending(false);
    }
  };

  return { data, pending, error };
}
