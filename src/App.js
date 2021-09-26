import './App.css';
import Home from "./components/HomePage/Home";
import React, {useState} from "react";
import NavDesktop from "./components/NavBar/NavDesktop";
import NavMobile from "./components/NavBar/NavMobile";

function App() {
    const [size,setsize] = useState(window.outerWidth);
    window.addEventListener('resize', ()=>setsize(window.outerWidth));
    const windowReset = () =>{
        if(size>=800){
            return <NavDesktop/>
        }
        else{
            return <NavMobile/>
        }
    }
  return (
    <div className="main_page">
        {
            windowReset()
        }
      <Home/>
    </div>
  );
}

export default App;
