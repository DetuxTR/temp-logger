import { Outlet } from "react-router-dom";
import { useState } from "react";
import { RiFahrenheitFill } from "react-icons/ri";
import { RiCelsiusFill } from "react-icons/ri";
export default function HomeParent(){
    var [content,setContent] = useState(<RiCelsiusFill size={18}/>)
    var [state,setState]= useState(1)
    const changeText = () => {
        if (state ==1){
            setState(0)
            setContent(<RiFahrenheitFill size={18}/>)
        }
        if (state ==0){
            setState(1)
            setContent(<RiCelsiusFill size={18}/>)
        }
    }
    return(
        <><div className="grid grid-cols-3">
        <div className="py-4 px-2">Temperature Logger v.0.1</div>
        <div></div>
        <div className="flex justify-end items-center px-2"><button onClick={()=>changeText()}>{content}</button></div>
        </div>
        <hr/>
        <Outlet/>
        </>
        
    )
}