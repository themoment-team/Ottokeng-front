import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as P from './pages';

function App() {
  return (
    <div className="App">
      <header></header>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage />}></Route> */}
          {/* <Route path="/login" element={<LoginPage />}></Route> */}
          <Route path="/write" element={<P.WritePage />} />
          <Route path="/list" element={<P.ListPage />}></Route>
          {/* <Route path="/list/:id" element={<Bulletin />}></Route> */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </div>
  );
}

export default App;
