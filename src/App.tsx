import { Route, Routes } from "react-router-dom";
import Shell from "./components/Shell";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
