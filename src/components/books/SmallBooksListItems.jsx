export const SmallBooksListItems = ({ books }) => {
  const { name, pages } = books;

  return (
    <>
      <p>{name}</p>
      <p>{pages}</p>
    </>
  );
};
