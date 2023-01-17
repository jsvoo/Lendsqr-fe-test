

import {useState} from "react" 
export const exportData = {user:"VOO"}

export default function ExportData(){
    const [initial, setInitial] = useState<{ filter: boolean, options: boolean }>({ filter: false, options: false })
    const [clicked, setClicked] = useState({ ...initial });
    // const click =2
    // const exports = {
    //     user:"VOO" 
    // }
 



    // export const exportData = {
    //     user:"VOO",
    //     click,
    //  }


    return (
        <div>

        </div>
    )

}

