import React from 'react';
import PageTitle from '../components/PageTitle';

export default function SignUpPage() {
  const [userInfo, setUserInfo] = React.useState({
    firstName: null,
    lastName: null,
    username: null,
    hashedPassword: null
  });

  const handleChange = () => {
    switch (event.target.id) {
      case 'firstName':
        setUserInfo({ firstName: event.target.value });
        break;
      case 'lastName':
        setUserInfo({ lastName: event.target.value });
    }
  };

  console.log(userInfo);
  return (
    <div className="container-fluid h-100vh">
      <div className="d-flex col-12 justify-content-center">
        <div className="flex-column justify-content-around">
          <PageTitle value="Sign Up" />

          <form>
            <label className="text" htmlFor="firstName">First Name</label><br/>
            <input id='firstName' type="text" onChange={handleChange}/>
          </form>
        </div>
      </div>
    </div>
  );
}
