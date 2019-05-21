import axios from 'axios'

export const dangNhap = (data) => {
    return (dispatch) => {
        axios
            .get('http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap', {
                params: {
                    taikhoan: data.taiKhoan,
                    matkhau: data.matKhau
                }
            })
            .then(res => {
                dispatch({
                    type: "DANG_NHAP",
                    nguoiDung: res.data[0]
                })
            })
            .catch(err => console.log(err))
    }
}

export const dangXuat = () => {
    return (dispatch) => {
        dispatch({
            type: "DANG_XUAT",
            nguoiDung: {}
        })
    }
}