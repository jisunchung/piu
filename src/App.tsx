import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthGuard from "@components/auth/AuthGuard";
import HomePage from "@pages/Home";
import MyPage from "@pages/My";
import SigninPage from "@pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <AuthGuard>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  );
}

export default App;
