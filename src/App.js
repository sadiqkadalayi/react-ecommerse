
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Jwellery from "./Components/Sections/JwellerySection/Jwellery";
import Electronics from "./Components/Sections/Electronics/Electronics";
import Single from "./Components/extras/singlePage/Single";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RootLayout/>}>
            <Route path="/*"/>
            <Route path="Single/:id" element={<Single/>}></Route>
              
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
