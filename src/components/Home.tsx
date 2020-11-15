import React from "react";
import Header from "./Header";

const Home = (props: any) => {
    return (
            <div className="text-center">
                <Header listHeader={"Studio Ghibli Wiki"}></Header>
                <p className="text-center font-lg">This is a wiki for the Routing in React Lab.</p>
            </div> 
        ); 
}

export default Home;