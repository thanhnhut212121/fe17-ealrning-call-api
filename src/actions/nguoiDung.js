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
                    nguoiDung: res.data
                })
            })
            .catch(err => console.log(err))
    }
}