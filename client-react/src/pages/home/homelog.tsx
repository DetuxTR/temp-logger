import axios from "axios";
import { useState,useEffect } from "react";
import { LogViewer,LogViewerSearch  } from "@patternfly/react-log-viewer";
import { Toolbar, ToolbarContent, ToolbarItem } from '@patternfly/react-core';
export default function ViewLogs(){
    var [data,setData]=useState([])
    useEffect(() => {
        fetchData(); // İlk veriyi çek
        
        const intervalId = setInterval(fetchData, 50); // Her 5 saniyede bir veri çek
        
        return () => clearInterval(intervalId); // Komponent kaldırıldığında interval'i temizle
      }, []); 
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/getlogs');
          console.log(response.data);
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      
      const BasicSearchLogViewer = () => (
        <LogViewer 
          data={data}
          toolbar={
            <Toolbar>
              <ToolbarContent>
                <ToolbarItem>
                  <LogViewerSearch placeholder="Search value" minSearchChars={1} style={
                     {
                                          }
                  }/>
                </ToolbarItem>
              </ToolbarContent>
            </Toolbar>
          }
          
        />
      );

    return(
        <>
         <div className="g-x-1"><BasicSearchLogViewer/></div>
        </>
        )
}