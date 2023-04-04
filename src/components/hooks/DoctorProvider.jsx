import { createContext, useState } from "react";

const DoctorContext = createContext();

const DoctorProvider = ({ children }) => {
    

    return (<DoctorContext.Provider value={{hello:'hi'}}>
        {children}
    </DoctorContext.Provider>)
}

export default DoctorProvider;