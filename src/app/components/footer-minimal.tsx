export default function FooterMinimal() {
  const dateYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between absolute bottom-3 left-3 right-3 text-white">
      <small className="self-end">
        &#9400; Copyright {dateYear}, Irene Clemente Aracil. All rights
        reserved.
      </small>
    </footer>
  );
}
