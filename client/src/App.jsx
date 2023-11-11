import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import DocumentPage from "./pages/DocumentPage";
import DocumentFormPage from "./pages/DocumentFormPage";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

import FilePage from "./pages/FilePage";

import ArchivePage from "./pages/ArchivePage";
import ArchiveFormPage from './pages/ArchiveFormPage'

import ProtectedRoute from "./ProtectedRoute";
import { DocumentProvider } from "./context/DocumentsContext";
//import Sidebard from "./components/Sidebard";
import Navbar from "./components/Navbar";
import { FileProvider } from "./context/FilesContext";
import { ArchiveProvider } from "./context/ArchivesContext";

//<Route path='/add-file' element={FileFormPage}/>
//


function App() {
  return (
    <AuthProvider>
      <DocumentProvider>
        <FileProvider>
          <ArchiveProvider>
            <BrowserRouter>
              <main className="container mx-auto px-10">
                <Navbar/>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/files" element={<FilePage />} />
                  
                  <Route path='/archives' element={<ArchivePage/>}/>
                  <Route path='/add-archive' element={<ArchiveFormPage/>}/>

                  <Route element={<ProtectedRoute />}>
                    <Route path="/documents" element={<DocumentPage />} />
                    <Route
                      path="/add-document"
                      element={<DocumentFormPage />}
                    />
                    <Route
                      path="/documents/:id"
                      element={<DocumentFormPage />}
                    />
                    <Route path="/profile" element={<ProfilePage />} />
                  </Route>
                </Routes>
              </main>
            </BrowserRouter>
          </ArchiveProvider>
        </FileProvider>
      </DocumentProvider>
    </AuthProvider>
  );
}

export default App;
