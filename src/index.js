import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TASK1 from "./task1/task1";
import Table from "./Table/Table";
import DIVCARD from "./Divcards/divcard";
import HOME from "./homecomp";
import "bootstrap/dist/css/bootstrap.min.css";
import ACcordion from "./Accordioncomponent/accordioncomp";
import AccordionTable from "./AccordionTablecomponent/accordiontablecomp";
import Parent from "./parentcomp";
import ToggleButton from "./ToggleSwith/toggleswitch";
import Counter from "./CounterAppcomponent/count";
import UserForm from "./UserFormcomponent/UserFormcomp";
import EvenOddChecker from "./EvenOddChecker/EvenOddChecker";
import Todolist from "./Todolistcomponent/Todolist";
// import LifeCycle from "./LifeCycle/LifeCycle";
import UpdatingPhase from "./UpdatingPhase/UpdatingPhase";
import FunctionalCounter from "./FunctionalCounter/FunctionalCounter";
import Calculator from "./Calculator/Calculator";
import FormEvents from "./FormEvents/FormEvents";
import LoginApi from "./LoginApi/LoginApi";
import COUNTER from "./COUNTER/COUNTER";
import UseEffect from "./UseEffect/UseEffect";
import Auth from "./Auth";
import AppRouter from "./Router/Router";
import DynamicRouters from "./Dynamic.Router/DynamicRouters";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />     */}
    {/* <TASK1/> */}
    {/* <Table/>  */}
    {/* <DIVCARD/>   */}
    {/* <HOME /> */}
    {/* <Parent login="admin"/>  */}
    {/* <HEAD/>  */}
    {/* <ToggleButton/> */}
    {/*  <Counter/> */}
    {/* <UserForm/>*/}
    {/* <EvenOddChecker/>*/}
    {/* <Todolist/>  */}
    {/* <LifeCycle/> */}
    {/* <UpdatingPhase /> */}
    {/* <FunctionalCounter/> */}
    {/* <Calculator/>  */}
    {/* <FormEvents/>  */}
    {/* <LoginApi/> */}
    {/* <COUNTER/> */}
    {/* <UseEffect/> */}
    {/* <Auth/> */}
    {/* <DynamicRouters/> */}
    <AppRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
