import React from 'react';
import PageTitle from '../components/PageTitle';
import axios from 'axios';

export default function SignInPage() {
  const [username, setUsername] = React.useState(null);
  const [userPassword, setUserPassword] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleChange = () => {
    switch (event.target.id) {
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
    axios.post('/api/auth/sign-in', {
      username, userPassword
    })
      .then(res => {
        console.log(res.data);
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
    <div className='container-fluid'>
      <PageTitle value='Sign in' />

      <div className='col-12 d-flex justify-content-center' style={{ margin: '10% auto' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label><br/>
            <input type="text" id='username' placeholder='Enter Your Username' onChange={handleChange} required/>
          </div>

          <div>
            <label htmlFor="password">Password</label><br/>
            <input type="password" id="password" placeholder='Enter Your Password' onChange={handleChange} required/>
          </div>

          <div>
            <input id='pwToggle' type='checkbox' onClick={togglePassword}/>
            <label htmlFor="pwToggle" style={{ color: 'white' }}>View Password</label><br/>
          </div>

          <div>
            <button className='btn btn-primary'>Submit</button><br/>
            <a href='/#signup'>Are you new here? Sign Up!</a>
          </div>
        </form>
      </div>
    </div>
  );
}
