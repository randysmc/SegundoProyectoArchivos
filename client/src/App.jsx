import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import DocumentPage from "./pages/DocumentPage";
import DocumentFormPage from "./pages/DocumentFormPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

import ProtectedRoute  from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoute/>}>
            <Route path="/documents" element={<DocumentPage />} />
            <Route path="/add-document" element={<DocumentFormPage />} />
            <Route path="/documents/:id" element={<DocumentFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
