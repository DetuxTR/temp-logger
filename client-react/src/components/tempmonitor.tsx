import { RiCelsiusFill } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";
import { useState } from "react";

export default function TempMonitor({ temp,id,name }:{temp:string,id:string,name:string}){
    var color =[c]
    return(
        
        <div className="container  rounded bg-slate-900  justify-content-center py-6 mx-auto my-6 grid grid-cols-9 ">
           <div className=" flex  justify-center text-3xl px-2 border-r-2">{temp} <RiCelsiusFill size={25}/> </div>  
           <div className=" flex justify-center items-center text-xl border-r-2"> {name} </div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div className="flex justify-end items-center text-xl px-12"><RiComputerFill size={25}/></div>
        </div>
    )
}