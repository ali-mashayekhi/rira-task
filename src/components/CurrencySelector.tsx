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
    <div className="bg-blue-300 text-white rounded-md py-2 min-w-28 flex justify-center gap-3 items-center">
      <img src={activeCurrency.flag} alt={activeCurrency.alt} className="w-5" />
      <p>{activeCurrency.content}</p>
    </div>
  );
}
