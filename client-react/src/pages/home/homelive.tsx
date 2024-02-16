import axios from "axios";
import TempMonitor from "../../components/tempmonitor";
import { useEffect , useState} from "react";
export default function HomeLive(){
    var [data,setData]=useState([])
    useEffect(() => {
        fetchData(); 
        
        const intervalId = setInterval(fetchData, 1000); 
        
        return () => clearInterval(intervalId); 
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
        <div className="grid grid-cols-3 my-2 grid-rows-3  "> 
        {Object.values(data).map((item) => (
        <TempMonitor key={item.id} temp={item.temp} id={item.id} name={item.name} type={item.type}/>
      ))}
      </div>
        </>
        
    )
}