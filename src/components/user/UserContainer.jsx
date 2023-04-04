import '../../assets/styles/main-user.css'
import Sidebar from '../common/Sidebar'
import DocsPanel from './DocsPanel';
import { useState, useEffect, useContext } from "react";
import EmptyPanel from './EmptyPanel';
import { UserInfo } from './UserInfo';
import SidebarCollapsed from './../common/SidebarCollapsed';
import { CommonContext } from '../hooks/CommonProvider';
import { useNavigate } from "react-router-dom";

export default function UserContainer() {
    
    const {setAuthorized, setUserType} = useContext(CommonContext)

    const navigate = useNavigate();

    const btnList = [
        { 
            name: 'Medical History', 
            id: 1,
            clicked: false,
            onclicked: (clickedId) => {
                var newBtnState = btnState.map((btn) => {
                    if (btn.id == clickedId)
                    return ({ ...btn , clicked:true});
                    else return ({ ...btn , clicked:false})
                })
                setBtnState(newBtnState);
            }
        },
        {
            name: 'Logout',
            id: 2,
            clicked: false, 
            onclicked: () => {
                axiosInstance('/user/logout').then((response)=>{
                    setAuthorized(false);
                    setUserType('');
                    navigate('/')
                }).catch((e)=>{
        
                });
            }
        }
    ];


    const {setBtnState, btnState, sideBarCollapsed, windowHeight} = useContext(CommonContext);
    useEffect(()=> {
        setBtnState(btnList);
    }, []);

    return (
        <div className="main-container">
            {   !sideBarCollapsed   &&
                (<Sidebar />)
            }
            {   sideBarCollapsed   &&
                (<SidebarCollapsed />)
            }
            { btnState[0] && btnState[0].clicked &&
               (<DocsPanel />)
            }
            { btnState[0] && !btnState[0].clicked &&
                (<EmptyPanel />)
            }
            {
                (windowHeight < 600 && sideBarCollapsed) ? null : <UserInfo />
            }
            
        </div>
    )
}