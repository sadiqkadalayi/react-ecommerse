
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Jwellery from "./Components/Sections/JwellerySection/Jwellery";
import Electronics from "./Components/Sections/Electronics/Electronics";
import Single from "./Components/extras/singlePage/Single";
import Main from "./Components/Main";
import SingleSection from "./Components/singleSection/SingleSection";
import Login from "./Components/Login/Login";
import Sign from "./Components/Sign/Sign";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/*" element={<RootLayout/>}>
            <Route path="/*" element={<Main/>}/>
            <Route path="Single/:id" element={<Single/>}></Route>
            <Route path="SingleSection/:cat" element={<SingleSection/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="Sign" element={<Sign/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
