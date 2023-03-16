import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { useState } from 'react';
import * as P from 'pages';

function App() {
  enum PATH {
    write = '/write/*',
    list = '/list',
    bulletin = '/list/1',
    login = '/login',
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage />}/> */}
          {/* <Route
            path={PATH.loginUser}
            element={<GoogleLoginBtnAfter />}
          ></Route>*/}
          {/* <Route path={PATH.login} element={<LoginPage />}/> */}
          <Route path="/content/list" element={<P.ListPage />} />
          <Route path={PATH.write} element={<P.WritePage />} />
          <Route path={PATH.bulletin} element={<P.BoardInfoPage />}></Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
