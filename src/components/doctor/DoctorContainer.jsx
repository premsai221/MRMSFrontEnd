import { useState, useEffect, useContext } from "react";
import Sidebar from "../common/Sidebar";
import SidebarCollapsed from "../common/SidebarCollapsed";
import '../../assets/styles/main-doctor.css'
import EmptyDocPanel from "./EmptyDocPanel";
import PatientHistoryPanel from "./PatientHistoryPanel";
import { CommonContext } from "../hooks/CommonProvider";


export default function DoctorContainer() {
        
    const btnList = [
        { 
            name: 'Patient Records', 
            id: 1,
            clicked: false,
            onclicked: (clickedID)=>{}
        },
        {
            name: 'Add Patient',
            id: 2,
            clicked: false,
            onclicked: (clickedID)=>{}
        },
        {
            name: 'Update Patient Details',
            id: 3,
            clicked: false, 
            onclicked: (clickedID)=>{}
        },
        {
            name: 'Logout',
            id: 4,
            clicked: false,
            onclicked: (clickedID)=>{}
        }
    ];

    const {setBtnState, btnState, sideBarCollapsed} = useContext(CommonContext);


    useEffect(()=> {
        console.log("hello")
        setBtnState(btnList);
    }, []);


    return (
        <div className="main-doctor-container">
            {   !sideBarCollapsed  &&
                (<Sidebar />)
            }
            {   sideBarCollapsed  &&
                (<SidebarCollapsed />)
            }
            { btnState[0] && btnState[0].clicked &&
               (<PatientHistoryPanel />)
            }
            { btnState[0] && !btnState[0].clicked &&
                (<EmptyDocPanel />)
            }
        </div>
    )
}