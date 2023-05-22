import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authActions';
import Error from '../components/Error';
import { useEffect } from 'react';

export default function SignIn() {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && !loading) {
      navigate('/Profile');
    }
  }, [userInfo, loading, navigate]);

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(submitForm)}>
           <Error>{error}</Error>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" {...register('email')} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" {...register('password')} required />
          </div>
          {/* <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div> */}
          <button className="sign-in-button" disabled={loading}>{loading ? 'Loading' : 'Login'}</button>
        </form>
      </section>
    </main>
  );
}
