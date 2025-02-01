import axios from 'axios'


export async function Login(user,password){
    try{
        const form = new FormData();
        form.append("email",email);
        form.append("password",password);
        const response = await axios.post(import.meta.env.VITE_API_URL,form);
        console.log(response);
    }catch(error){
        console.log(error);
    } 
}