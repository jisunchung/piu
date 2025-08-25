import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@pages/Home";
import MyPage from "@pages/My";
import SigninPage from "@pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
