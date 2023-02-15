import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
<<<<<<< HEAD
import { GoogleLoginBtnBefore, GoogleLoginBtnAfter } from './components';

function App() {
  return (
    <div className="App">
      <header></header>

=======
import { Header, Footer } from './components';
function App() {
  return (
    <div className="App">
      <Header />
>>>>>>> 515b01cd7d396a672b12830623d79e54c894d442
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage />}></Route> */}
          <Route path="/login" element={<GoogleLoginBtnBefore />}></Route>
          <Route
            path="/login/login/*"
            element={<GoogleLoginBtnAfter />}
          ></Route>
          {/* <Route path="/write" element={<WritePage />}></Route> */}
          {/* <Route path="/list" element={<ListPage />}></Route> */}
          {/* <Route path="/list/:id" element={<Bulletin />}></Route> */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
