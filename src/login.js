// Install the Kakao JavaScript SDK
// npm install kakaotalk

import React from 'react';
import { Kakao } from 'kakaotalk';

const App = () => {
  const handleKakaoLogin = () => {
    Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj);
        // Handle successful login here
      },
      fail: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <div>
      <button onClick={handleKakaoLogin}>Login with Kakao</button>
    </div>
  );
};

export default App;
