import profile from '../../assets/images/profile.png'
import { UserContext } from '../hooks/UserProvider'
import axiosInstance from '../../apis/axiosAuthApi';
import { useContext, useEffect } from 'react'

export function UserInfo() {

    const { userInfo, setUserInfo } = useContext(UserContext);

    useEffect(()=>{
        axiosInstance.get('user/fetchinfo').then(response=>{
            setUserInfo(response.data);
        }).catch(e=>{
            console.log(e);
        })
    }, [])

    return (
        <div className="user-info-wrapper">
            {userInfo &&
                (
                    <div className="user-info">
                        <img src={profile} className="user-profile-pic" alt="user profile pic" />
                        <h2>Name: {userInfo.userName}</h2>
                        <h3>DOB: {String(userInfo.DOB).slice(0, 10)}</h3>
                        <h3>Blood Group: {userInfo.bloodGP}</h3>
                        <h3>Contact: {userInfo.contact}</h3>
                        <h3>Emergency Contact: {userInfo.emgContact}</h3>
                    </div>
                )
            }

        </div>
    )
}