import '../styles/register.css';
import { formHook } from '../hooks/formHook';
import { useRef, useState } from 'react';

export function RegisterPage(){
   const passwordRef = useRef(null);
   const [verifyPass,setVerifyPass] = useState('');
   const [borderColor,setBorderColor] = useState(' #e0e0e0');
    const {data,clearData,updateData} = formHook({
        "name":"",
        "email":"",
        "password":""
    });

    const verifyPassword = ({target})=>{
        const {value} = target;
        setVerifyPass(value);
        if (passwordRef.current.value !== value) {
            setBorderColor("red");
        } else {

            setBorderColor("green"); 
        }
    }

    const updateDateForm = ({target})=>{
        const {value,name} = target;
        updateData(name,value);


    }

    const registerData =(event)=>{
        event.preventDefault();
       // console.log("Data Sending");
        if(data.password == verifyPass){
            console.log("Password Match Send Datas");
            console.log(data.password);
            console.log(verifyPass)
        }else{
            console.log("Password  Not Match , Verify Data");
        }

    }

    return (<>
        
        <div className="container-register-form">
            <div className="text-title-register">
                <p className='typing-effect'>Create an Account Now</p>
            </div>
            <div className="form-register-form">
                <h3 className='title-form-register'>Data</h3>
                <form action="" className='my-form-register' onSubmit={registerData}>
                 <div className="mb-1">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control form-control-sm my-input-register" id="name" name='name' aria-describedby="emailHelp" onChange={updateDateForm} required/>
                </div>
                <div className="mb-1">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control form-control-sm my-input-register" id="email" name="email" onChange={updateDateForm} required/>
                </div>
                <div className="mb-1">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control form-control-sm my-input-register" id="password" name='password' ref={passwordRef} onChange={updateDateForm} required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="verify" className="form-label">Verify Password</label>
                    <input type="password" className="form-control form-control-sm my-input-register" id="verify" name='verify' onChange={verifyPassword} required style={{
                                    border: `2px solid ${borderColor}`, // Aplica color dinámico
                                    outline: "none",
                                    padding: "5px",
                                    borderRadius: "20px"
                                }}/>
                </div>
                <button type="submit" className="btn btn-sm button-login">Register</button>
                </form>
            </div>
        </div>
    </>);
}