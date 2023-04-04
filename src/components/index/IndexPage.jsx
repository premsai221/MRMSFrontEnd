import { Link } from "react-router-dom"
import '../../assets/styles/main-index.css'
import { useState } from "react"
import LoginForm from "./LoginForm"

export default function IndexPage() {

    const [loginUserType, setLoginUserType] = useState('');

    return (
        <div className="index-container">
            <h1 className="">MRMS</h1>
            { !loginUserType  &&
                (<div className="index-nav-wrapper">
                    <button className="index-nav-btn" onClick={()=>{setLoginUserType('user')}}>User</button>
                    <button className="index-nav-btn" onClick={()=>{setLoginUserType('doctor')}}>Doctor</button>
                </div>)
            } 
            { loginUserType === 'user' &&
                <LoginForm  loginUserType={loginUserType} setLoginUserType={setLoginUserType} />
            }
            { loginUserType === 'doctor' &&
                <LoginForm loginUserType={loginUserType} setLoginUserType={setLoginUserType} />
            }
        </div>
    )
}