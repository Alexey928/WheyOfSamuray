import {sestIsMenuActiveAC,navigationStaete} from "../ActionCreators/navigationMenuAC";

export  type navigationMenuActionType =  ReturnType <typeof sestIsMenuActiveAC>

 export type navigationStateType = typeof navigationStaete

export const navigationMenuReduser = (state=navigationStaete,action:navigationMenuActionType):navigationStateType=>{
    switch (action.type) {
        case "SET_NAV_STATUS":
            return {...state,isActive: action.flag}
        default:
            return state
    }

}