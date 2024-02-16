import { RiCelsiusFill } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";
import { SiMacos } from "react-icons/si";
import { SiAndroid } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { useState,useEffect } from "react";

export default function TempMonitor({ temp,id,name,type }:{temp:string,id:string,name:string,type:string}){
    const [typelogo,setTypelogo] = useState(<RiComputerFill size={25}/>)
    useEffect(()=>{
        if (type=="linux"){
            setTypelogo(<SiLinux />)
        }
        if (type=="mac")
        {
            setTypelogo(<SiMacos size={35}/>)
        }
        if (type=="android")
        {
            setTypelogo(<SiAndroid />)
        }
    })
    
    return(
        
        <div  className="container  rounded bg-neutral-900 hover:bg-neutral-800 justify-content-center py-6 mx-auto my-6 grid grid-cols-9 ">
           <div className=" flex  justify-center text-3xl px-2 border-r-2">{temp} <RiCelsiusFill size={25}/> </div>  
           <div className=" flex justify-center items-center text-xl border-r-2"> {name} </div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div className="flex justify-end items-center text-xl px-12">{typelogo}</div>
        </div>
    )
}