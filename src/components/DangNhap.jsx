import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

class DangNhap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taiKhoan: "",
			matKhau: ""
		}
	}
	
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault()

		// axios
		// 	.get(`http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${this.state.taiKhoan}&matkhau=${this.state.matKhau}`)
		// 	.then(res => console.log(res))
		// 	.catch(err => console.log(err))

		axios
			.get('http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap', {
				params: {
					taikhoan: this.state.taiKhoan,
					matkhau: this.state.matKhau
				}
			})
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
				<h1>ĐĂNG NHẬP</h1>
				<Container className="text-left">
					<Form onSubmit={this.onSubmit}>
						<FormGroup>
							<Label for="taiKhoan">Tai khoan: </Label>
							<Input 
								type="text" 
								name="taiKhoan" 
								id="taiKhoan" 
								placeholder="Nhập tai khoan" 
								onChange={this.onChange}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="matKhau">Mat khau: </Label>
							<Input 
								type="password" 
								name="matKhau" 
								id="matKhau" 
								placeholder="Nhập mat khau" 
								onChange={this.onChange}
							/>
						</FormGroup>

						<Button>Dang nhap</Button>
					</Form>
				</Container>
			</div>
		);
	}
}

export default DangNhap;