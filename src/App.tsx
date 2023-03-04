import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Theme } from '@emotion/react';
import { Footer } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage />}></Route> */}
          {/* <Route path="/login" element={<GoogleLoginBtnBefore />}></Route> */}
          {/* <Route
            path="/login/login/*"
            element={<GoogleLoginBtnAfter />}
          ></Route> */}
          {/* <Route path="/write" element={<WritePage />}></Route> */}
          {/* <Route path="/list" element={<ListPage />}></Route> */}
          {/* <Route path="/list/" element={<BoardInfo />}></Route> */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
