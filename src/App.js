
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Jwellery from "./Components/Sections/JwellerySection/Jwellery";
import Electronics from "./Components/Sections/Electronics/Electronics";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RootLayout/>}>
              
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
