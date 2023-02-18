import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as P from './pages';
declare global {
  interface Window {
    kakao: any;
  }
}

function App() {
  return (
    <div className="App">
      <header></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<P.StartPage />}></Route>
          <Route path="/main" element={<P.MainPage />}></Route>
          {/* <Route path="/login" element={<LoginPage />}></Route> */}
          {/* <Route path="/write" element={<WritePage />}></Route> */}
          {/* <Route path="/list" element={<ListPage />}></Route> */}
          {/* <Route path="/list/:id" element={<Bulletin />}></Route> */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </div>
  );
}

export default App;
