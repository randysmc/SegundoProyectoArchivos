import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(user)

  return (
    <div className="bg-green-950 my-3 flex-shrink justify-between py-5 px-5">
      <Link to="/">
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
  );
}

export default Navbar;
