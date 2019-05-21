import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/* components */
import DanhSachKhoaHoc from './components/DanhSachKhoaHoc'
import DangNhap from './components/DangNhap';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={DangNhap} />
          <Route path="/dang-nhap" exact component={DangNhap} />
          <Route path="/dskh" exact component={DanhSachKhoaHoc} />

          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
