import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Theme } from '@emotion/react';
import * as C from 'components';
import * as P from 'PageContainer';

function App() {
  enum PATH {
    login = '/login',
    loginUser = 'login/login/*',
    list = '/list/',
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage />}></Route> */}
          {/* <Route path={PATH.login} element={<GoogleLoginBtnBefore />}></Route> */}
          {/* <Route
            path={PATH.loginUser}
            element={<GoogleLoginBtnAfter />}
          ></Route> */}
          {/* <Route path="/write" element={<WritePage />}></Route> */}
          {/* <Route path="/list" element={<ListPage />}></Route> */}
          <Route path={PATH.list} element={<P.BoardInfo />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
