import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MeterialUIDemo from './MeterialUIDemo'
//import ReusableComponents from './ReusableComponents'
//import ChildtoParentState from './ChildtoParentState'
//import ReactRouterDemo from './ReactRouterDemo'
//import Form from './Form'
//import Timer from './Timer'
//import ListRender from './ListRender'
//import NonStateObject from './NonStateObject'
//import PropsDemo from './PropsDemo'
//import App3 from './App3.jsx'
//import StateObjectDemo from './StateObjectDemo'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MeterialUIDemo/>
  </StrictMode>,
)
