const initialState = {
    nguoiDung: {},
    daDangNhap: false
}

const nguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DANG_NHAP":
            
            break;
    
        default:
            break;
    }

    return {...state};
}

export default nguoiDungReducer