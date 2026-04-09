import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import { AllTasksProvider } from "./components/context/context";

createRoot(document.getElementById('root')).render(
  <AllTasksProvider>
    <Home/>
  </AllTasksProvider>
)
