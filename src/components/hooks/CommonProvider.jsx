import { createContext, useState } from "react";

export const CommonContext = createContext();

export const CommonProvider = ({ children }) => {

    const [userType, setUserType] = useState('');

    const [authorized, setAuthorized] = useState(false);

    const [btnState, setBtnState] = useState([]);

    const [sideBarCollapsed, setSideBarCollapsed] = useState(false);

    const [windowHeight, setWindowHeigth] = useState(window.innerWidth);


    return (
        <CommonContext.Provider value={{ userType, setUserType, authorized, setAuthorized, btnState, setBtnState, sideBarCollapsed, setSideBarCollapsed, windowHeight, setWindowHeigth }}>
            {children}
        </CommonContext.Provider>
    )
}