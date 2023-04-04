import { useState, useContext } from "react";
import SidebarOptionBtn from "./SidebarOptionBtn";
import { CommonContext } from "../hooks/CommonProvider";

export default function SidebarOptions() {

    const {btnState, setBtnState} = useContext(CommonContext); 

    const sidebarBtnClicked = (clickedId) => {
        var newBtnState = btnState.map((btn) => {
            if (btn.id == clickedId)
            return ({ ...btn , clicked:true});
            else return ({ ...btn , clicked:false})
        })
        setBtnState(newBtnState);
    }
    

    return (
        <div className="sidebar-options">
            {btnState.map((btnObj) => 
                <SidebarOptionBtn btnObj={btnObj} key={btnObj.id} sidebarBtnClicked={sidebarBtnClicked} />
            )}
        </div>
    )
}