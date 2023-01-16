 
import { createContext } from "react"
import { exportData } from "./ExportData"



export const LendsqrUserContextManager  = createContext(exportData)

type contextProviderProps ={
    children:React.ReactNode
}

export default function LendsqrUserContext({children}:contextProviderProps){
 

    return <LendsqrUserContextManager.Provider value={exportData}>{children}</LendsqrUserContextManager.Provider>
}

