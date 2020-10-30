import React from 'react';
const Auth = () => (
  <div>
    <form>
      <input type='text' placeholder='Email' required />
      <input type='text' placeholder='Password' required />
      <input type='submit' value='Login' />
    </form>
    <div>
      <button>Continue with Google</button>
    </div>
  </div>
);
export default Auth;
