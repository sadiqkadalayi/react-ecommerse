
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Jwellery from "./Components/Sections/JwellerySection/Jwellery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RootLayout/>}>
              <Route path="*" element={<Jwellery/>}></Route>
              <Route path="*" element={<Jwellery/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
