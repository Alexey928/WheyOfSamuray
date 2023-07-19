export const  navigationStaete = {
    isActive: false as boolean
}

export const sestIsMenuActiveAC = (flag:boolean)=>{
    return{type:'SET_NAV_STATUS',flag} as const
}
