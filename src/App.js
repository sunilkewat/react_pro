
import './App.css';

import Header from './Header';
import RouterMenu from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
     <Header></Header>
     <RouterMenu></RouterMenu>
     {/* <BrowserRouter>
       <RouterMenu></RouterMenu>
     </BrowserRouter> */}
     
    </>
  );
}

export default App;
