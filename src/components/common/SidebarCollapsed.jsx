import SidebarOptions from "./SidebarOptions"
import { useContext } from "react";
import { CommonContext } from "../hooks/CommonProvider";

export default function SidebarCollapsed() {
    
    const {setSideBarCollapsed} = useContext(CommonContext);

    return (
        <div className="sidebar-collapsed">
            <legend className="sidebar-logo">MRMS</legend>
            
            <button className="sidebar-expand-btn" onClick={() => {setSideBarCollapsed(false)}}>
            {
                window.innerWidth > 600 && (<>&#9658;</>)
            }
            {
                window.innerWidth <= 600 && (<>&#9660;</>)
            }
            </button>
        </div>
    )
}