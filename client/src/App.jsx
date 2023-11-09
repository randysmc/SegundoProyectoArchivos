import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import DocumentPage from "./pages/DocumentPage";
import DocumentFormPage from "./pages/DocumentFormPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

import ProtectedRoute from "./ProtectedRoute";
import { DocumentProvider } from "./context/DocumentsContext";
//import Sidebard from "./components/Sidebard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <DocumentProvider>
        <BrowserRouter>
<main className="container mx-auto px-10">
<Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/documents" element={<DocumentPage />} />
                  <Route path="/add-document" element={<DocumentFormPage />} />
                  <Route path="/documents/:id" element={<DocumentFormPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Route>
              </Routes>
</main>

        </BrowserRouter>
      </DocumentProvider>
    </AuthProvider>
  );
}

export default App;
