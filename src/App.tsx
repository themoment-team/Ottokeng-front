import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as C from 'components';
import { useState } from 'react';

interface UserProps {
  name: string;
  userImg: string;
}

let init: UserProps = {
  name: 'Anon',
  userImg: 'img',
};

function App() {
  const [header, setHeader] = useState<UserProps>(init);

  function App() {
    enum PATH {
      login = '/login',
      loginUser = 'login/login/*',
      list = '/list/',
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <C.Header header={header} />
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
        <C.Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
