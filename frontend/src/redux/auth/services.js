import axios from "axios";

export const loginService = async(data)=>{
try{
    const res = await axios.post("http://localhost:2000/v1/shop/user/login",data);
    return res;
}catch(err){
    console.log("error:>>",err);
}
}