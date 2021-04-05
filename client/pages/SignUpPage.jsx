import React from 'react';
import PageTitle from '../components/PageTitle';
import axios from 'axios';

export default function SignUpPage() {
  const [userFirst, setUserFirst] = React.useState(null);
  const [userLast, setUserLast] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  const [userPassword, setUserPassword] = React.useState(null);

  const [loading, setLoading] = React.useState(true);

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
    console.log('userInfo: ', userFirst, userLast, username, userPassword);
    axios.post('/api/auth/signup', {
      userFirst, userLast, username, userPassword
    })
      .then(res => {
        setLoading(false);
        console.log('res: ', res);
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
            <label className="text" htmlFor="password">Enter a Password</label><br/>
            <input id='password' type="password" onChange={handleChange} required/><br/>
            <input id='pwToggle' type='checkbox' onClick={togglePassword}/>
            <label htmlFor="pwToggle">View Password</label><br/>
            <button className='btn btn-info' type='submit'>Sign Up</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
