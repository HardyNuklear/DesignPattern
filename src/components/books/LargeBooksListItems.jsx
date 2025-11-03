export const LargeBooksListItems = ({ books }) => {
  const { name, pages, title, price } = books;

  return (
    <>
      <h2>{name}</h2>
      <p>{pages}</p>
      <p>{title}</p>
      <p>{price}</p>
    </>
  );
};
