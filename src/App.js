import { LargeAuthorListItems } from "./components/author/LargeAuthorListItems";
import { SmallAuthorListItems } from "./components/author/SmallAuthorListItems";
import { LargeBooksListItems } from "./components/books/LargeBooksListItems";
import { SmallBooksListItems } from "./components/books/SmallBooksListItems";
import { NumberedList } from "./components/lists/NumberedList";
import { RegularList } from "./components/lists/RegularList";
import { authors } from "./data/authors";
import { books } from "./data/books";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItems}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItems}
      />
      <hr />
      <h1>books lists</h1>
      <RegularList
        items={books}
        sourceName={"books"}
        ItemComponent={LargeBooksListItems}
      />
      <NumberedList
        items={books}
        sourceName={"books"}
        ItemComponent={SmallBooksListItems}
      />
    </>
  );
}

export default App;
