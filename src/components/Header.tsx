import React from "react"
import ghibli from "../img/ghibli.png";
import NavBar from"./NavBar";

interface HeaderProps{
    listHeader:string;
}

const Header = (props: HeaderProps) => {
    return (
        <div className="text-center">
            <h1 className="h1 text-center color-acc-amber">Routing in React Lab</h1>
            <div className="mb-5"><img src={ghibli} alt="Logo" /> </div>
            <NavBar></NavBar>
            <div className="h1 text-center color-acc-amber">{props.listHeader}</div>
        </div>    
           
        ); 
}

export default Header;