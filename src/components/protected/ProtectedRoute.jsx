import { CommonContext } from "../hooks/CommonProvider"
import { useContext } from "react"
import UserContainer from '../user/UserContainer';
import {UserProvider} from '../hooks/UserProvider';
import DoctorContainer from "../doctor/DoctorContainer";
import DoctorProvider from "../hooks/DoctorProvider";
import { Navigate } from "react-router-dom";


export default function ProtectedRoute({type, children}) {
    const {userType, authorized} = useContext(CommonContext);

    if (!authorized){
        return (<Navigate to='/' />)
    }
    else {
        return (
            <>
                { type === 'user' && authorized && userType === type && 
                    (<UserProvider> <UserContainer /></ UserProvider>)
                }    
                { type === 'doctor' && authorized && userType === type && 
                    (<DoctorProvider> <DoctorContainer /></ DoctorProvider>)
                }
            </>
        )
    }
}