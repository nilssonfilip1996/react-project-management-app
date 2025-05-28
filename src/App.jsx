import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <div className="flex flex-row">
        <div className="basis-1/3">
          <Sidebar/>
        </div>
      </div>
    </>
  );
}

export default App;
