import ArgentBankLogo from "../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { useGetUserDetailsQuery } from "../app/services/authService";
import { logout, setCredentials } from '../features/auth/authSlice'
import { useEffect } from "react";


export default function Navbar() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { data } = useGetUserDetailsQuery('userDetails', {
    pollingInterval: 90000,

  })
  const logoutHandler = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (data) { dispatch(setCredentials(data)) }
  }, [data, dispatch])


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
      {userInfo ? (
          <><Link to="/Profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {userInfo.body.firstName}
          </Link><Link to="/SignIn" className="main-nav-item" onClick={logoutHandler}>
              <i className="fa fa-user-circle"></i>
              Sign Out
            </Link></>
        ) : ( 
            <Link to="/SignIn" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
    </div>
  </nav>
  )
}