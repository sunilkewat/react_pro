
import React,{createContext} from "react";


 const UserContext = createContext();
 
export default function Comp1(){
    

    return(<>
   <UserContext.Provider value={"Hello Sunil"}>
      <Comp1></Comp1>
   </UserContext.Provider>   
    
    </>)
}
export {UserContext};

