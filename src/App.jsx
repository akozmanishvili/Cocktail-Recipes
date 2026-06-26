import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <nav>navbar here</nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
