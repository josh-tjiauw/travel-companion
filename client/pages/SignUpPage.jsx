import React from 'react';
import PageTitle from '../components/PageTitle';
import axios from 'axios';

export default function SignUpPage() {
  const [userFirst, setUserFirst] = React.useState(null);
  const [userLast, setUserLast] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  const [userPassword, setUserPassword] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleChange = () => {
    switch (event.target.id) {
      case 'firstName':
        setUserFirst(event.target.value);
        break;
      case 'lastName':
        setUserLast(event.target.value);
        break;
      case 'username':
        setUsername(event.target.value);
        break;
      case 'password':
        setUserPassword(event.target.value);
    }
  };

  const handleSubmit = () => {
    event.preventDefault();
    setLoading(true);
    axios.post('/api/auth/signup', {
      userFirst, userLast, username, userPassword
    })
      .then(res => {
        if (res.status === 200) {
          setErrorMessage(res.data);
          setLoading(false);
        } else {
          setErrorMessage(null);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const togglePassword = () => {
    const pw = document.getElementById('password');
    if (pw.type === 'password') {
      pw.type = 'text';
    } else {
      pw.type = 'password';
    }
  };

  return (
    <div className="container-fluid h-100vh">
      <div className="d-flex col-12 justify-content-center">
        <div className="flex-column">
          <PageTitle value="Sign Up" />

          <div className="signUpForm" style={{ margin: '25% auto' }}>
            <form onSubmit={handleSubmit}>
            <label className="text" htmlFor="firstName">First Name</label><br/>
            <input id='firstName' type="text" onChange={handleChange} required/><br/>
            <label className="text" htmlFor="lastName">Last Name</label><br/>
            <input id='lastName' type="text" onChange={handleChange} required/><br/>
            <label className="text" htmlFor="firstName">Enter a Username</label><br/>
            <input id='username' type="text" onChange={handleChange} required/><br/>
            {errorMessage ? <h6 style={{ color: 'white' }}>{errorMessage}</h6> : null}
            <label className="text" htmlFor="password">Enter a Password</label><br/>
            <input id='password' type="password" onChange={handleChange} required/><br/>
            <input id='pwToggle' type='checkbox' onClick={togglePassword}/>
            <label htmlFor="pwToggle" style={{ color: 'white' }}>View Password</label><br/>
            {loading ? <button className='btn btn-info' type='submit'>Signing up...</button> : <button className='btn btn-info' type='submit'>Sign Up</button>}
            <h6 style={{ color: 'white' }}>Already signed up? <a href='#sign-in'>Sign in!</a></h6>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
