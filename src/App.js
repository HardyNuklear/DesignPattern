import SplitScreen from "./components/SplitScreen";


const LeftSideComp = ({title}) => {
  return (
    <h2 style={{backgroundColor :'red'}}>{title}</h2>
  )
}

const RightSideComp = ({title}) => {
  return (
    <h2 style={{backgroundColor :'green'}}>{title}</h2>
  )
}

function App() {
  return (
    <SplitScreen LeftWidth={1} RightWidth={3}>
      <LeftSideComp title={"Left"}/>
      <RightSideComp title={"Right za ka"}/>
    </SplitScreen>
  );
}

export default App;
