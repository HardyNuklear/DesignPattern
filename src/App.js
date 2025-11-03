import { UserInfo } from "./components/user-info";
import { DataSource } from "./components/data-source";
import axios from "axios";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <DataSource
        getData={() => getDataFromServer("/users/2")}
        ressourceName="user"
      >
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
