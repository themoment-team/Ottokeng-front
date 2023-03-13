import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { GoogleLoginBtnBefore, GoogleLoginBtnAfter } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage />}></Route> */}
          <Route path="/login" element={<GoogleLoginBtnBefore />}></Route>
          <Route path="/login/*" element={<GoogleLoginBtnBefore />}></Route>
          {/* <Route path="/write" element={<WritePage />}></Route> */}
          {/* <Route path="/list" element={<ListPage />}></Route> */}
          {/* <Route path="/list/" element={<BoardInfo />}></Route> */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
