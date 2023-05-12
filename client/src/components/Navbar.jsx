import ArgentBankLogo from "../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-nav">
    <Link className="main-nav-logo" to="/">
      <img
        className="main-nav-logo-image"
        src={ArgentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
      {/* <a className="main-nav-item" href="./sign-in.html"> */}
      <Link to="/SignIn" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  </nav>
  )
}