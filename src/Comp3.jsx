import React, { useContext } from "react";
import { UserContext } from "./Comp1";

export default function Comp3(){
const bdta = useContext(UserContext);
console.log(bdta);
    return(<>
     <h1>Comp3 {bdta}</h1>
    </>)
}