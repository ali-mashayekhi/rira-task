export default function CurrencySelector({
  activeCurrency,
}: {
  activeCurrency:
    | {
        value: string;
        content: string;
        flag: string;
        alt: string;
      }
    | undefined;
}) {
  if (!activeCurrency) return;
  return (
    <div className="flex items-center justify-center gap-2 py-2 text-white bg-blue-300 rounded-md min-w-16 sm:min-w-28 md:gap-3">
      <img
        src={activeCurrency.flag}
        alt={activeCurrency.alt}
        className="w-4 sm:w-5"
      />
      <p className="text-sm sm:text-base">{activeCurrency.content}</p>
    </div>
  );
}
