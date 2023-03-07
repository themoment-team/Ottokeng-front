import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as P from './PageContainer';

function App() {
  return (
    <div className="App">
      <header></header>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage />}/> */}
          {/* <Route path="/login" element={<LoginPage />}/> */}
          {/* <Route path="/write" element={<P.WritePage />} /> */}
          <Route path="/list" element={<P.ListPage />} />
          {/* <Route path="/list/:id" element={<Bulletin />}/> */}
          {/* <Route path="*" element={<NotFound />}/> */}
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </div>
  );
}

export default App;
