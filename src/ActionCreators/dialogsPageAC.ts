 export  type addDialogActionType = {
    type:"ADD_DIALOG"
    newDialog:string
};
export  type removeDialog = {
    type:"REMOVE_DIALOG"
    dialogID:string
}

export type updateEnteredDialogValue = {
    type:"UDATE_ENTERRED_DIALOG"
    curentValue:string
}

export const addDialogAC = (newPost:string):addDialogActionType=>{
    return   {type:"ADD_DIALOG",newDialog: newPost};
}
export const remuveDialog = (dialogID:string):removeDialog=>{
    return {type:"REMOVE_DIALOG",dialogID}
}
export const updateEnteredDialogValue = (curentValue:string)=>{

}
