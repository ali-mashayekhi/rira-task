import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="flex justify-center w-20 px-6 py-2 text-sm text-white duration-300 bg-blue-500 rounded-md sm:text-base sm:w-24 hover:bg-blue-400">
      {children}
    </button>
  );
}
