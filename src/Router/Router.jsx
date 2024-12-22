import React from "react";
import "./Router.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import App from "../App";
import UseEffect from "../UseEffect/UseEffect";
import ACcordion from "../Accordioncomponent/accordioncomp";
import AccordionTable from "../AccordionTablecomponent/accordiontablecomp";
import Calculator from "../Calculator/Calculator";
import COUNTER from "../COUNTER/COUNTER";
import Count from "../CounterAppcomponent/count";
import DIVCARD from "../Divcards/divcard";
import EvenOddChecker from "../EvenOddChecker/EvenOddChecker";
import FormEvents from "../FormEvents/FormEvents";
import FunctionalCounter from "../FunctionalCounter/FunctionalCounter";
import LoginApi from "../LoginApi/LoginApi";
import Parent from "../parentcomp";
import Table from "../Table/Table";
import TASK1 from "../task1/task1";
import Todolist from "../Todolistcomponent/Todolist";
import ToggleButton from "../ToggleSwith/toggleswitch";
import UpdatingPhase from "../UpdatingPhase/UpdatingPhase";
import UserForm from "../UserFormcomponent/UserFormcomp";
import PageNotFound from "../PageNotFound";
import HOME from "../homecomp";
import DynamicRouters from "../Dynamic.Router/DynamicRouters";


function AppRouter() {
  return (
    <Router>
      <div className="total"
        style={{
          backgroundColor: "orange",
          padding: "15px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link className="links" to="/UseEffect">UseEffect</Link>
         <Link className="links" to="/ACcordion">ACcordion</Link>
         <Link className="links" to="/AccordionTable">AccordionTable</Link>
         <Link className="links" to="/Calculator">Calculator</Link>
         <Link className="links" to="/COUNTER">COUNTER</Link>
         <Link className="links" to="/Count">Count</Link>
         <Link className="links" to="/DIVCARD">DIVCARD</Link>
         <Link className="links" to="/EvenOddChecker">EvenOddChecker</Link>
         <Link className="links" to="/FormEvents">FormEvents</Link>
         <Link className="links" to="/FunctionalCounter">FunctionalCounter</Link>
         <Link className="links" to="/LoginApi">LoginApi</Link>
         <Link className="links" to="/Parent">Parent</Link>
         <Link className="links" to="/Table">Table</Link>
         <Link className="links" to="/TASK1">TASK1</Link>
         <Link className="links" to="/Todolist">Todolist</Link>
         <Link className="links" to="/ToggleButton">ToggleButton</Link>
         <Link className="links" to="/UpdatingPhase">UpdatingPhase</Link>
         <Link className="links" to="/UserForm">UserForm</Link>
         <Link className="links" to="/HOME">HOME</Link>
         {/* <Link className="links" to="/DynamicRouters">DynamicRouters</Link> */}
        
      </div>

      <Routes>
        <Route path="*" element={<PageNotFound />} /> 
        <Route path="/UseEffect" element={<UseEffect />} />
        <Route path="/ACcordion" element={<ACcordion />} />
        <Route path="/AccordionTable" element={<AccordionTable />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/COUNTER" element={<COUNTER />} />
        <Route path="/Count" element={<Count />} />
        <Route path="/DIVCARD" element={<DIVCARD />} />
        <Route path="/EvenOddChecker" element={<EvenOddChecker />} />
        <Route path="/FormEvents" element={<FormEvents />} />
        <Route path="/FunctionalCounter" element={<FunctionalCounter />} />
        <Route path="/LoginApi" element={<LoginApi />} />
        <Route path="/Parent" element={<Parent login="user" />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/TASK1" element={<TASK1 />} />
        <Route path="/Todolist" element={<Todolist />} />
        <Route path="ToggleButton/" element={<ToggleButton />} />
        <Route path="/UpdatingPhase" element={<UpdatingPhase />} />
        <Route path="/UserForm" element={<UserForm />} />
        <Route path="/HOME" element={<HOME />} />
        {/* <Route path="/DynamicRouters" element={<DynamicRouters />} /> */}
      </Routes>
     </Router>
 

  );
}

export default AppRouter;
