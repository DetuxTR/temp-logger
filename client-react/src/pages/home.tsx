import axios from "axios";
import { Component, useEffect, useState } from "react"
import { RiFahrenheitFill } from "react-icons/ri";
import { RiCelsiusFill } from "react-icons/ri";

import TempMonitor from "../components/tempmonitor";
export default function Home(){
    var [content,setContent] = useState(<RiCelsiusFill size={18}/>)
    var [state,setState]= useState(1)
    var [data,setData]=useState([])
  /*  
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:5000/getlatest');
            
            console.log(response.data);
            setData(response.data)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchData();
      },[]); 
        
        console.log()
    */
    useEffect(() => {
      fetchData(); // İlk veriyi çek
      
      const intervalId = setInterval(fetchData, 50); // Her 5 saniyede bir veri çek
      
      return () => clearInterval(intervalId); // Komponent kaldırıldığında interval'i temizle
    }, []); 

   const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getlatest');
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    
    
    
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
        <>
        <div className="grid grid-cols-3">
        <div className="py-4 px-2">Temperature Logger v.0.1</div>
        <div></div>
        <div className="flex justify-end items-center px-2"><button onClick={()=>changeText()}>{content}</button></div>
        </div>
        <hr/>
        
        
        {Object.values(data).map((item) => (
        <TempMonitor key={item.id} temp={item.temp} id={item.id} name={item.name}/>
      ))}

        </>
    )
}