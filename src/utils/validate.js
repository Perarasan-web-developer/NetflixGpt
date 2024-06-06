export const checkValidateData=(email,password,name=0)=>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(name!=0)
    {
        const isNameValid=/\b([A-ZA-y][-,a-z. ']+[ ]*)+/.test(name)
        if(!isNameValid) return "name is not valid";
    }
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "password is not valid";

    return null;
}