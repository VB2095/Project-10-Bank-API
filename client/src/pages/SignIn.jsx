
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from 'react'

import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

import { login } from '../actions/auth'

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
            This field is required!
            </div>
        )
    }
}

const SignIn = () => { 
    let navigate = useNavigate()

    const form = useRef()
    const checkBtn = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        const email = e.target.value
        setEmail(email)
    }

    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        setLoading(true)

        form.current.validateAll()

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(email, password))
                .then(() => {
                    console.log('login success', isLoggedIn)
                    navigate('/Profile')
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false)
                })
        } else {
            setLoading(false)
        }
    }

    if (isLoggedIn) {
        return <Navigate to="/Profile" />
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <Form onSubmit={handleLogin} ref={form}>
                <div className="input-wrapper">
                    <label htmlFor='email'>Email</label>
                    <Input type='email' className='form-control' name='email' value={email} onChange={onChangeEmail} validations={[required]} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor='password'>Password</label>
                    <Input type='password' className='form-control' name='password' value={password} onChange={onChangePassword} validations={[required]} />
                </div>
                {/* <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div> */}
                <button className="sign-in-button" disabled={loading}>Sign In</button>
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{ display: 'none' }} ref={checkBtn} />
            </Form>
            </section>
        </main>
    )
}

export default SignIn



// export default function SignIn() {
//     return (
//         <main className="main bg-dark">
//             <section className="sign-in-content">
//             <i className="fa fa-user-circle sign-in-icon"></i>
//             <h1>Sign In</h1>
//             <form>
//                 <div className="input-wrapper">
//                     <label htmlFor="username">Username</label>       
//                     <input type="text" id="username" />
//                 </div>
//                 <div className="input-wrapper">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" />
//                 </div>
//                 <div className="input-remember">
//                     <input type="checkbox" id="remember-me" />
//                     <label htmlFor="remember-me">Remember me</label>
//                 </div>
//             {/* <!-- PLACEHOLDER DUE TO STATIC SITE -->
//             <a href="./user.html" className="sign-in-button">Sign In</a>
//             <!-- SHOULD BE THE BUTTON BELOW -->
//             <!-- <button className="sign-in-button">Sign In</button> -->
//             <!--  --> */}
//             <button className="sign-in-button">Sign In</button>
//             </form>
//             </section>
//       </main>
//     )
// }