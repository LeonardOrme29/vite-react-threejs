import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addAuth } from '../features/auth/authSlice'

function Login() {
    const navigate=useNavigate();
    const [correo,setCorreo]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    async function submit(e){
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/user/login',{
                correo,password
            })
            .then(res=>{
                if(res.data==='not exist'){
                    alert('NO EXISTE EL USUARIO')
                }else{
                    alert('Usuario encontrado')
                    dispatch(addAuth({
                        correo:res.data.correo,
                        password:res.data.password,
                        nombre:res.data.nombre
                    }))
                    navigate('/')
                }
                // if(res.data==="exist"){
                //     alert('SE LOGRO ACCEDER AL USUARIO')
                //     dispatch(addAuth({
                //         correo:correo,
                //         password:password

                //     }))
                //     navigate('/')
                // }else if(res.data==='not exist'){
                //     alert('NO EXISTE EL USUARIO')
                // }
            })
            .catch(e =>{
                console.log(e);
                alert('datos incongruentes')
            })
        } catch (e) {
            console.log(e);
        }
        
    }
    return (
        <div>
            <div className='container-xl login-container'>
                <h2>LOGIN</h2>
                <form action='POST'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type='email' className='form-control' aria-describedby="emailHelp" onChange={(e)=>{setCorreo(e.target.value)}} placeholder='Correo Electronico'/>
                    <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type='password' className="form-control" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Contraseña'/>
                </div> 
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login