export const SmallAuthorListItems = ({ author }) => {
  const { name, age } = author;

  return (
    <p>
      name {name}, age{age}
    </p>
  );
};
