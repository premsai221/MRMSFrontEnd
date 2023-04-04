import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});
    const [cardList, setCardList] = useState([]);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, cardList, setCardList }}>
            {children}
        </UserContext.Provider>
    )
}