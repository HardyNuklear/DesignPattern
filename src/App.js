import SplitScreen from "./components/SplitScreen";


const LeftSide = () => {
  return (
    <h2>I am Left</h2>
  )
}

const RightSide = () => {
  return (
    <h2>I am Right</h2>
  )
}

function App() {
  return (
    <SplitScreen Left={LeftSide} Right={RightSide}/>
  );
}

export default App;
