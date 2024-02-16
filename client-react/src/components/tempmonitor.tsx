import { RiCelsiusFill } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";
import { SiMacos } from "react-icons/si";
import { SiAndroid } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { useState,useEffect } from "react";
import { SiApple } from "react-icons/si";
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
        if(type == "ios")
        {
            setTypelogo(<SiApple />)
        }
    })
    
    return(
        
        <div  className="rounded bg-neutral-900 hover:bg-neutral-800 justify-content-center w-96 h-96 mx-auto  my-4 grid ">
          
           <div className=" flex justify-center items-center text-xl "> {name} </div>
           <div className=" flex  justify-center text-9xl px-2 ">{temp} <RiCelsiusFill size={50}/> </div>  
           <div className="flex justify-end items-center text-xl px-12">{typelogo}</div>
        </div>
    )
}