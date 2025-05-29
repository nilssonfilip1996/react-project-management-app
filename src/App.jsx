import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex flex-row mt-36">
        <div className="basis-1/4">
          <Sidebar/>
        </div>
        <div className="basis-3/5">
          <Content/>
        </div>
      </div>
    </>
  );
}

export default App;
