import { Navigate } from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from 'react-redux'

import UpdateForm from '../components/UpdateForm'
export default function Profile() {
  //get user info from redux store that come from the signin action 
    const { userInfo } = useSelector((state) => state.auth);
    const [isFormVisible, setFormVisible] = useState(false);
    
  
  if (!userInfo) {
        return <Navigate to="/SignIn" />
    }

    
    return (
        <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back {userInfo.body.firstName} {userInfo.body.lastName}!</h1>
        {!isFormVisible && (
      <button className="edit-button" onClick={() => setFormVisible(true)}>
        Edit Name
      </button>
    )}
    {isFormVisible && (
      <UpdateForm setFormVisible={setFormVisible} />
    )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    )
}