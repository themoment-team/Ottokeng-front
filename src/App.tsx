import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as P from './pages';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';

function App() {
  enum PATH {
    write = '/write',
    list = '/list',
    bulletin = '/list/:id',
    login = '/login',
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header></header>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<MainPage />}/> */}
            {/* <Route path={PATH.login} element={<LoginPage />}/> */}
            <Route path={PATH.write} element={<P.WritePage />} />
            {/* <Route path={PATH.list} element={<ListPage />}/> */}
            {/* <Route path={PATH.bulletin} element={<Bulletin />}/> */}
            {/* <Route path="*" element={<NotFound />}/> */}
          </Routes>
        </BrowserRouter>
        <footer></footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
