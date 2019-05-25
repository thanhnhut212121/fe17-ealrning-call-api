import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/* components */
import DanhSachKhoaHoc from './components/DanhSachKhoaHoc'
import DangNhap from './components/DangNhap';
import DangKy from './components/DangKy';
import NotFound from './components/NotFound';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={DangNhap} />
          <Route path="/dang-ky" component={DangKy} />
          <Route path="/dang-nhap" exact render={({history}) => <DangNhap history={history} />} />
          <Route path="/dskh" exact component={DanhSachKhoaHoc} />

          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
