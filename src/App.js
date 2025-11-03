import { SmallBooksListItems } from "./components/books/SmallBooksListItems";
import { RegularList } from "./components/lists/RegularList";
import { Modal } from "./components/Modal";
import { books } from "./data/books";

function App() {
  return (
    <>
      <Modal>
        <RegularList
          items={books}
          sourceName={"books"}
          ItemComponent={SmallBooksListItems}
        />
      </Modal>
    </>
  );
}

export default App;
