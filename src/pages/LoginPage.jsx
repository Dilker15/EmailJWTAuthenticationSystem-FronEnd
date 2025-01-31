import { NavLink } from 'react-router-dom';
import { formHook } from '../hooks/formHook';
import '../styles/login.css';


export function LoginPage(){
    const {updateData,data,clearData} = formHook({
        "email":"",
        "password":""
    })

    

    const updateDataForm = ({target})=>{
        const {name,value} = target;
        updateData(name,value);
    }

    const sendForm = (event)=>{
        event.preventDefault();

        clearData();
    }


    return (<>
        <h1 className='title-login'>Welcome AuthSystem</h1>
        <div className="login-container">
            <h3 className='title-form-login'>Login</h3>
            <form action="" className='my-form-login' onSubmit={sendForm}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" id="email" className="form-control form-control-sm my-input-login"  aria-describedby="emailHelp" placeholder='Enter Your Email' value={data.email} onChange={updateDataForm} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-control form-control-sm my-input-login" placeholder='Enter Your Password' onChange={updateDataForm} value={data.password} required />
                </div>
                <div className="container-actions-login">
                    <NavLink to={'/register'} className="link-to-register">Create an Account</NavLink>
                    <button type="submit" className="btn btn-sm button-login">Login</button>
                </div>
                

            </form>
        </div>
    </>);
}