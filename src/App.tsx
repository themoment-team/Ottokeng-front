import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as C from 'components';
import { useState } from 'react';
import * as P from './PageContainer';

interface UserProps {
  name: string;
  userImg: string;
}

let init: UserProps = {
  name: 'Anon',
  userImg: 'img',
};

const [header, setHeader] = useState<UserProps>(init);

function App() {
  enum PATH {
    write = '/write/*',
    list = '/list',
    bulletin = '/list/:id',
    login = '/login',
  }

  return (
      <div className="App">
        <BrowserRouter>
        <C.Header header={header} />
          <Routes>
            {/* <Route path="/" element={<MainPage />}/> */}
            {/* <Route
            path={PATH.loginUser}
            element={<GoogleLoginBtnAfter />}
          ></Route>*/}
            {/* <Route path={PATH.login} element={<LoginPage />}/> */}
            <Route path={PATH.write} element={<P.WritePage />} />
            {/* <Route path={PATH.list} element={<ListPage />}/> */}
            {/* <Route path={PATH.list} element={<BoardInfo />}></Route> */}
            {/* <Route path={PATH.bulletin} element={<Bulletin />}/> */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        <C.Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
