const initialState = {
    nguoiDung: {},
    daDangNhap: false
}

const nguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DANG_NHAP":
            // const newState = {...state};
            // newState.nguoiDung = action.nguoiDung
            return {
                ...state,
                nguoiDung: action.nguoiDung,
                daDangNhap: true
            }

        case "DANG_XUAT":
            return {
                ...state,
                nguoiDung: {},
                daDangNhap: false
            }
    
        default:
            break;
    }

    return state;
}

export default nguoiDungReducer