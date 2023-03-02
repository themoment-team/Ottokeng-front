import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Theme } from '@emotion/react';
import { Header } from './components';

function App() {
  enum PATH {
    login = '/login',
    loginUser = 'login/login/*',
    list = '/list/',
  }
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage />}></Route> */}
          {/* <Route path={PATH.login} element={<Login />}></Route> */}
          {/* <Route
            path={PATH.loginUser}
            element={<GoogleLoginBtnAfter />}
          ></Route>
          <Route path="/write" element={<WritePage />}></Route> */}
          {/* <Route path="/list" element={<ListPage />}></Route> */}
          {/* <Route path={PATH.list} element={<BoardInfo />}></Route> */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
      <footer />
    </div>
  );
}

export default App;
