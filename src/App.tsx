import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthGuard from "@components/auth/AuthGuard";
import NavBar from "@components/shared/NavBar";
import AdvancedPage from "@pages/Advanced";
import BeginnerPage from "@pages/Beginner";
import HomePage from "@pages/Home";
import IntermediatePage from "@pages/Intermediate";
import MyPage from "@pages/My";
import SigninPage from "@pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <AuthGuard>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/beginner" element={<BeginnerPage />} />
          <Route path="/intermediate" element={<IntermediatePage />} />
          <Route path="/advanced" element={<AdvancedPage />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  );
}

export default App;
