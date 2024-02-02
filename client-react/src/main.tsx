
import ReactDOM from 'react-dom/client'
import Router from './routes'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
   
   <RouterProvider router={Router}/>
 
)
