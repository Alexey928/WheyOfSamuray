import {DispatchType} from "../State/reduxStore";
import {authUserAPI} from "../API/dalAPI";
import { AxiosError } from "axios";


export const UserAuthState = {// auto types constant --> typeof constType =
   data:{
       id: null as number | null,
       email: null as string | null,
       login: null as string | null,
       isAuth: false,
   },
    isFeching:false
};

export const setAuthUserDataAC = (//auto types function --> type actionType = typeof setAuthUserDataAC,
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
) =>
    ({
     type: "AUTH/SET-AUTH-USER-DATA",
     payload: {
      id,
      login,
      email,
      isAuth,
     },
    } as const);
export const setIsRequestProcessingStatusAC = (flag:boolean)=>{
return {type:"SET-REQUST-PROCESSING-STATUS",flag} as const
}

export const authMeTC = ()  => async (dispatch:DispatchType) => {
    debugger
    dispatch(setIsRequestProcessingStatusAC(true));
    try {
        const response = await authUserAPI.authMe();
        debugger
        if (response.resultCode === 0) {
            const { id, login, email } = response.data;
            dispatch(setAuthUserDataAC(id, login, email, true));
            // const res = await profileAPI.getUserProfile(response.data.data.id);
            // dispatch(setAuthedUserProfileAC(res.data));
        }
    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>;//for types error as "Error" , or  as "AxiosError"
        console.log(err.message)
        alert(e)
    } finally {
        dispatch(setIsRequestProcessingStatusAC(false));
    }
};