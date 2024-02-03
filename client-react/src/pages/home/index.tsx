import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiFahrenheitFill } from "react-icons/ri";
import { RiCelsiusFill } from "react-icons/ri";

export default function HomeParent(){
    const nav = useNavigate();
    var [content,setContent] = useState(<RiCelsiusFill size={18}/>)
    var [state,setState]= useState(1)
    var [page,setPage] =useState('live')
    var [viewcolor, setViewcolor] = useState('text-white')
    var [livecolor, setLivecolor] = useState('text-red-300')
    function changePage(page:string){
        
        nav(page)
        setPage(page)
        if (page == 'viewlogs'){
            setViewcolor('text-red-300')
            setLivecolor('text-white')
        }
        if (page=='live'){
            setViewcolor('text-white')
            setLivecolor('text-red-300')
        }
    }
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
        <div className="flex justify-center items-center gap-x-3"><button className={livecolor} onClick={()=>changePage('live')}>Live View</button><button className={viewcolor} onClick={()=>changePage('viewlogs')}>Logs</button></div>
        <div className="flex justify-end items-center px-2"><button onClick={()=>changeText()}>{content}</button></div>
        </div>
        <hr/>
        <Outlet/>
        </>
        
    )
}