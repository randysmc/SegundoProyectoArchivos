import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  //console.log(user)

  return (
    <div className="bg-teal-800 my-3 flex-shrink justify-between py-5 px-5">
      <Link to={isAuthenticated ? "" : "/"}>
        <h1 className="text-2xl text-yellow-300 font-sans">CloudArch</h1>
      </Link>

      <ul className="flex-grow flex gap-x-3 items-center text-white">
        {isAuthenticated ? (
          <>
            <li className="text-gray-300">Bienvenido {user.username}</li>
            <li>
              <Link
                to="/add-document"
                className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Add Document
              </Link>
            </li>
            <li>
              <Link
                to="/add-archive"
                className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Add Archive
              </Link>
            </li>
            <li>
              <Link
                to="/archives"
                className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Ver Archivos
              </Link>
            </li>
            <li>
              <Link
                to="/files"
                className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Ver Carpetas
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Agregar usuario
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => logout()}
                className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="text-gray-300">NO está autenticado</li>
            <li>
              <Link
                to="/login"
                className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;

/**
 * 
 *     <div className="bg-green-950 my-3 flex-shrink justify-between py-5 px-5">
      <Link to={
        isAuthenticated ? "documents": "/"
      }>
        <h1 className="text-2xl text-yellow-900 font-sans">CloudArch</h1>
      </Link>

      <ul className="flex gap-x-3">
        {isAuthenticated ? (
          <>
            <li>Bienvenido {user.username}</li>
            <li>
              <Link to="/add-document" className="bg-blue-800 px-4 py-1 rounded-sm">Add Document</Link>
            </li>
            <li>
              <Link to="/add-archive" className="bg-blue-800 px-4 py-1 rounded-sm">Add Archive</Link>
            </li>
            <li>
              <Link to="/archives" className="bg-blue-800 px-4 py-1 rounded-sm">Ver Archivos</Link>
            </li>
            <li>
              <Link to="/files" className="bg-blue-800 px-4 py-1 rounded-sm">Ver Carpetas</Link>
            </li>
            <li>
              <Link to="/register" className="bg-blue-800 px-4 py-1 rounded-sm">Agregar usuario</Link>
            </li>
            <li>
              <Link to="/" onClick={() => logout()} className="bg-blue-800 px-4 py-1 rounded-sm">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>NO esta autenticado</li>
            <li>
              <Link to="/login"
                className="bg-blue-800 px-4 py-1 rounded-sm"
              >Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
 */
