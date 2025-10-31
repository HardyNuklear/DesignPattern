import { LargeAuthorListItems } from "./components/author/LargeAuthorListItems";
import { SmallAuthorListItems } from "./components/author/SmallAuthorListItems";
import { RegularList } from "./components/lists/RegularList";
import { authors } from "./data/authors";

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
    </>
  );
}

export default App;
