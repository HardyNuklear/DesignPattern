export const LargeAuthorListItems = ({ author }) => {
  const { name, age, contry, books } = author;

  console.log("AUTHOOOR", author);
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{contry}</p>
      <h2>Books:</h2>
      <ul>
        {books.map((book, idx) => (
          <li key={idx}>{book}</li>
        ))}
      </ul>
    </>
  );
};
