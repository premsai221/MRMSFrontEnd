import SidebarOptions from "./SidebarOptions";

export default function SidebarOptionBtn({btnObj, sidebarBtnClicked}) {
    return (
        <button className={btnObj.clicked?"sidebar-options-btn btn-clicked": "sidebar-options-btn"} onClick={() => sidebarBtnClicked(btnObj.id)}>
            {btnObj.name}
        </button>
    )
}