import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import {dangNhap} from '../actions/nguoiDung';
import {connect} from 'react-redux';

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
		
		this.props.dangNhap(this.state, this.props.history)
	}

	render() {
		const { errors } = this.props
		return (
			<div>
				<h1>ĐĂNG NHẬP</h1>

				{
					errors.dangNhap ?
					<Alert color="danger" >
						{errors.dangNhap}
					</Alert> : null
				}

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

const mapStateToProps = (state) => {
	return {
		errors: state.errors
	}
}


export default connect(mapStateToProps, {dangNhap})(DangNhap);