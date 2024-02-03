import axios from "axios";
import TempMonitor from "../../components/tempmonitor";
import { useEffect , useState} from "react";
export default function HomeLive(){
    var [data,setData]=useState([])
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