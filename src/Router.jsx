import {  Route, Routes} from "react-router-dom";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Home from "./Home";
import React from "react";
import Comp3 from "./Comp3";
function RouterMenu(){
    return(
        <Routes>
            <Route exact path="/" Component={Comp1}></Route>
            <Route path="/home" Component={Home}></Route>
            <Route path="/about" Component={Comp2}></Route>
            <Route path="/services" Component={Comp3}></Route>
            <Route path="/com3" Component={Comp3}></Route>
        </Routes>
    )
}
export default RouterMenu;