import {setAuthUserDataAC, setIsRequestProcessingStatusAC, UserAuthState} from "../ActionCreators/authUserAC";


export type AuthActionsType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setIsRequestProcessingStatusAC>

type UserAuthStateType = typeof UserAuthState


export function authUserReduser( state=UserAuthState,action:AuthActionsType,):UserAuthStateType{
    switch (action.type) {
        case "AUTH/SET-AUTH-USER-DATA":
            return {...state,data:action.payload,}
        case "SET-REQUST-PROCESSING-STATUS":
            return {...state,isFeching: action.flag}
        default:
            return state
    }

}
