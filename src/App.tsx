import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Theme } from '@emotion/react';
import {
  GoogleLoginBtnBefore,
  GoogleLoginBtnAfter,
  Footer,
  Header,
  BoardInfo,
} from './components';

function App() {
  const [header, setHeader] = useState<string>('사용자');
  return (
    <div className="App">
      <Header header={header} />

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage />}></Route> */}
          <Route path="/login" element={<GoogleLoginBtnBefore />}></Route>
          <Route
            path="/login/login/*"
            element={<GoogleLoginBtnAfter setHeader={setHeader} />}
          ></Route>
          {/* <Route path="/write" element={<WritePage />}></Route> */}
          {/* <Route path="/list" element={<ListPage />}></Route> */}
          <Route path="/list/" element={<BoardInfo />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
