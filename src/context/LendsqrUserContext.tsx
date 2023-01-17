 
import { createContext, useState } from "react" 
import { exportData } from "./ExportData"

interface dataType {
    [key:string ]:string | number | boolean | object  
}


export const LendsqrUserContextManager  = createContext<dataType>({})

type contextProviderProps ={
    children:React.ReactNode
}

export default function LendsqrUserContext({children}:contextProviderProps){
    const [initial, setInitial] = useState<{ filter: boolean, options: boolean }>({ filter: false, options: false })
    const [clicked, setClicked] = useState({ ...initial });
 
 
    const data={user:"VOO", age:23, lie:true, clicked, setClicked}

    return <LendsqrUserContextManager.Provider value={data}>{children}</LendsqrUserContextManager.Provider>
}

