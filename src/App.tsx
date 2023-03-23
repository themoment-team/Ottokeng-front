import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { useState } from 'react';
import * as P from 'pages';

function App() {
  enum PATH {
    write = '/write/*',
    list = '/list',
    bulletin = '/list/1',
    login = '/login/*',
    start = '/start',
    main = '/',
    about = '/about',
    user = '/user',
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={PATH.login} element={<P.LoginPage />}></Route>
          {/* <Route path="/write" element={<WritePage />}></Route> */}
          {/* <Route path="/list" element={<ListPage />}></Route> */}
          {/* <Route path="/list/:id" element={<Bulletin />}></Route> */}

          {/* <Route path="*" element={<NotFound />}></Route> */}
          {/* <Route path="/" element={<MainPage />}/> */}
          {/* <Route
            path={PATH.loginUser}
            element={<GoogleLoginBtnAfter />}
          ></Route>*/}
          {/* <Route path={PATH.login} element={<LoginPage />}/> */}
          <Route path={PATH.start} element={<P.StartPage />}></Route>
          <Route path={PATH.main} element={<P.MainPage />}></Route>
          <Route path={PATH.about} element={<P.AboutPage />}></Route>
          <Route path={PATH.user} element={<P.UserPage />}></Route>
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
