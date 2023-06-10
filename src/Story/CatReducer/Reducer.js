const initialState = {
    isData: [],
    isDataImg: []
}
export const LoginReducer = (state = initialState, action)  =>{
    switch (action.type){
        case 'DATA':
        return {
            ...state,
            isData: action.payload
        }
        case 'DATAIMG':
            return {
                ...state,
                isDataImg: action.payload
            }
        default: return state
    }
}
