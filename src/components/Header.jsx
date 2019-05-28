import React, { Component } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { dangXuat } from '../actions/nguoiDung';

class Header extends Component {
  render() {
    const { nguoiDungHienTai } = this.props;
    const { daDangNhap, nguoiDung } = nguoiDungHienTai
    return (
      <div>
        <Navbar color="warning" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          {
            daDangNhap ?
              (<Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/nguoi-dung" className="nav-link">
                    Xin chào {nguoiDung.HoTen}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" onClick={this.props.dangXuat} className="nav-link">
                    Đăng xuất
                </Link>
                </NavItem>
              </Nav>) :
              (<Nav className="ml-auto" navbar>
                <NavItem >
                  <Link to="/" className="nav-link">
                    Đăng nhập
              </Link>
                </NavItem>
                <NavItem>
                  <Link to="/dang-ky" className="nav-link">
                    Đăng ký
              </Link>
                </NavItem>
              </Nav>)
          }
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungHienTai: state.nguoiDung
  }
}

export default connect(mapStateToProps, { dangXuat })(Header);