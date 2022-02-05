import React from 'react';
import {Link} from 'react-router-dom'

function HomePage() {
  return (
  <div>
      <h1>환영합니다.</h1>
      <button><Link to="/login">로그인 하기</Link></button>
  </div>
  );
}

export default HomePage;
