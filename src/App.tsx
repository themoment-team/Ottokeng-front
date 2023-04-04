import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as P from 'pages';
import PrivateRoute from 'components/PrivateRoute';

function App() {
  enum PATH {
    write = '/write/*',
    list = '/content/list',
    bulletin = '/list',
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
          <Route path={PATH.start} element={<P.StartPage />}></Route>
          <Route
            path={PATH.main}
            element={<PrivateRoute component={<P.MainPage />} />}
          ></Route>
          <Route path={PATH.about} element={<P.AboutPage />}></Route>
          <Route
            path={PATH.user}
            element={<PrivateRoute component={<P.UserPage />} />}
          ></Route>
          <Route
            path={PATH.list}
            element={<PrivateRoute component={<P.ListPage />} />}
          />
          <Route
            path={PATH.write}
            element={<PrivateRoute component={<P.WritePage />} />}
          />
          <Route
            path={PATH.bulletin}
            element={<PrivateRoute component={<P.BoardInfoPage />} />}
          ></Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
