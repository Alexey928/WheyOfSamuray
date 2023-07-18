





export const UserAuthState = {// auto types constant --> typeof constType =
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
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