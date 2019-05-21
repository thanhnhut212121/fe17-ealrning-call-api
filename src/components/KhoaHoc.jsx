import React, { Component } from 'react';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';


class KhoaHoc extends Component {
	render() {
		const { khoa } = this.props
		return (
			<Col md={4} className="my-3">
				<Card>
					<CardImg 
						top 
						width="100%" 
						src={khoa.HinhAnh} alt={khoa.TenKhoaHoc} />
					<CardBody className="text-left">
						<CardTitle>{khoa.TenKhoaHoc}</CardTitle>
						<CardText>Nguoi tao: {khoa.NguoiTao}</CardText>
						<CardText>Luot xem: {khoa.LuotXem}</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
			</Col>
		);
	}
}

export default KhoaHoc;