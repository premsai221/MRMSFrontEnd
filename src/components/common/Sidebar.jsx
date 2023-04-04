import SidebarOptions from "./SidebarOptions"
import { useContext } from "react"
import { CommonContext } from "../hooks/CommonProvider";

export default function Sidebar() {

    const {setSideBarCollapsed} = useContext(CommonContext);
    
    return (
        <div className="sidebar">
            <legend className="sidebar-logo">MRMS</legend>
            <button className="sidebar-collapse-btn" onClick={() => {setSideBarCollapsed(true)}}>
                
                {
                window.innerWidth > 600 && (<>&#9668;</>)
                }
                {
                window.innerWidth <= 600 && (<>&#9650;</>)
                }
            </button>
            <SidebarOptions />
        </div>
    )
}