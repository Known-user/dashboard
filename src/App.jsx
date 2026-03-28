import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <Sidebar />
          <main className="p-6 flex-1 overflow-auto">
            <Home />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
