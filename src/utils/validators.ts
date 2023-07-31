


export const required = (value:string)=>{
    console.log(value)
    return value?undefined:"field is required "
}
export const maxLength =  (value:string) =>
    value && value.length > 35? `Must be ${35} characters or less` : undefined

export const minLength =  (value:string) =>
    value && value.length < 4 ? `Must be at least ${4}` : undefined

