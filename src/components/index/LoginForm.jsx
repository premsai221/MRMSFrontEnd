import { useState, useContext } from "react"
import axiosInstance from "../../apis/axiosAuthAPi";
import { CommonContext } from "../hooks/CommonProvider";
import { useNavigate } from "react-router-dom";

export default function LoginForm({loginUserType, setLoginUserType}) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const {setUserType, setAuthorized} = useContext(CommonContext);
 
    const loginFunction = () => {
        if (userName.length === 16 && !isNaN(userName)){
            axiosInstance.post('loginuser', {userID: userName, password: password}).then(response=>{
                console.log(response)
                if (response.data.validPassword){
                    setUserType('user');
                    setAuthorized(true);
                    navigate('/user');
                }
                else {
                    alert("Incorrect Password")
                    setPassword('');
                }
            }).catch((error)=>{
                console.log(error.response);
                alert("ID not found");
                setUserName('');
                setPassword('');
            })
        } else {
            alert('Invalid Username');
            setUserName('');
            setPassword('');
        }
    }

    const doctorLoginFunction = ()=> {
        navigate('/doctor');
    }

    return (
        <div className="index-form-wrapper">
            <h1>Login for {loginUserType}</h1>
            <div className="input-wrapper">
                <label htmlFor="">User ID: </label>
                <input type='text' id='userID' onChange={(e) => {setUserName(e.target.value)}} value={userName} />
                <label htmlFor="">Password: </label>
                <input type='password' id='password' onChange={(e) => {setPassword(e.target.value)}} value={password} />
            </div>
            <br />
            <div className="button-grp">
                <button className="index-nav-btn" onClick={()=>{setLoginUserType('')}}>Go Back</button>
                <button className="index-nav-btn" onClick={loginUserType==='user'? loginFunction: doctorLoginFunction}>Login</button>
            </div>
        </div>
    )
}