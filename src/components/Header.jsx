import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-danger text-white py-3">
      <nav className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-white text-decoration-none">
            <h1 className="h4 m-0">RECU ALNOKIOGAMING</h1>
          </Link>
          <ul className="nav font-bold">
            <li className="nav-item">
              <Link to="/landing" className="nav-link text-white">
                JUEGOS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/publishers" className="nav-link text-white">
                PUBLISHERS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>


  )
}

export default Header
