import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="bg-blue-500 text-white w-24 flex justify-center px-6 py-2 rounded-md hover:bg-blue-400 duration-300">
      {children}
    </button>
  );
}
