import axios from "axios";
import { Component, useEffect, useState } from "react"
import { RiFahrenheitFill } from "react-icons/ri";
import { RiCelsiusFill } from "react-icons/ri";

import TempMonitor from "../components/tempmonitor";
export default function Home(){
   
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
    
    
    
    
    return(
        <>
        
        
        
        {Object.values(data).map((item) => (
        <TempMonitor key={item.id} temp={item.temp} id={item.id} name={item.name}/>
      ))}

        </>
    )
}