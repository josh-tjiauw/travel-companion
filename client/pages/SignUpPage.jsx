import React from 'react';
import PageTitle from '../components/PageTitle';

export default function SignUpPage() {
  const [userInfo, setUserInfo] = React.useState({
    firstName: null,
    lastName: null,
    username: null,
    password: null,
    isCompleted: false,
    info: null
  });

  const handleChange = () => {
    switch (event.target.id) {
      case 'firstName':
        setUserInfo({ firstName: event.target.value });
        break;
      case 'lastName':
        setUserInfo({ lastName: event.target.value });
        break;
      case 'username':
        setUserInfo({ username: event.target.value });
        break;
      case 'password':
        setUserInfo({ password: event.target.value });
    }
  };

  const handleSubmit = () => {
    event.preventDefault();
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(data => {
        setUserInfo({ info: data, isCompleted: true });
      });
    console.log(userInfo);
  };

  const togglePassword = () => {
    const pw = document.getElementById('password');
    if (pw.type === 'password') {
      pw.type = 'text';
    } else {
      pw.type = 'password';
    }
  };

  console.log(userInfo);
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