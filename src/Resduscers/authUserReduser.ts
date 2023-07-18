import {setAuthUserDataAC, UserAuthState} from "../ActionCreators/authUserAC";


export type AuthActionsType =
    | ReturnType<typeof setAuthUserDataAC>

type UserAuthStateType = typeof UserAuthState


export function authUserReduser(action:AuthActionsType, state=UserAuthState):UserAuthStateType{
    switch (action.type) {
        case "AUTH/SET-AUTH-USER-DATA":
            return {...action.payload,}
    }
}
