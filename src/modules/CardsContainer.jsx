export default function CardsContainer({ children }) {
  return (
    <div className="flex flex-wrap gap-10 md:grid xl:grid-cols-3 2xl:grid-cols-4 grid-cols-2 items-center justify-center">
      {children}
    </div>
  );
}
