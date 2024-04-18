import "./navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Ped<b>Reader</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/books">Books</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/authors">Authors</a>
                </li>
              </ul>
              <form className="d-flex" >
                <button className="btn-entrar" type="submit">Entrar</button>
              </form>
            </div>
          </div>
        </nav>
    </div>
  );
}
