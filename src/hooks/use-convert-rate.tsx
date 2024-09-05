import { useEffect, useState } from "react";
import getConvertRate from "../lib/data-service";

export default function useConvertRate() {
  const [data, setData] = useState<{ rate: null | number }>({ rate: null });
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Using IIFE function call to use async function inside useEffect
    (async function fetchData() {
      try {
        const result = await getConvertRate();
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
    })();
  }, []);

  return { data, pending, error };
}
