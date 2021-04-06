import React from 'react';
import PageTitle from '../components/PageTitle';
import axios from 'axios';

export default function SignInPage() {
  return (
    <div className='container-fluid'>
      <PageTitle value='Sign in' />

      <div className="signUpForm" style={{ margin: '25% auto' }}>
        <form style={{ color: 'white' }}>
          <label htmlFor="username">Username</label>
          <input type="text" id='username'/><br/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"/>
        </form>
      </div>
    </div>
  );
}
