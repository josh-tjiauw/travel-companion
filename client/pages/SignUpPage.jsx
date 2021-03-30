import React from 'react';
import PageTitle from '../components/PageTitle';

export default function SignUpPage() {
  const [userInfo, setUserInfo] = React.useState({
    firstName: null,
    lastName: null,
    username: null,
    hashedPassword: null
  });
  return (
    <div className="container-fluid h-100vh">
      <div className="d-flex col-12 justify-content-center">
        <div className="flex-column justify-content-around">
          <PageTitle value="Sign Up" />

          <form>
            <label className="text" htmlFor="firstName">First Name</label><br/>
            <input type="text"/>
          </form>
        </div>
      </div>
    </div>
  );
}
