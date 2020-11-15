import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="d-flex justify-content-center mb-5 mt-2">
            <div><Link className="btn-lg color-acc-amber" to="/">Go Home</Link></div>
            <div><Link className="btn-lg color-acc-amber" to="/films">Load Films</Link></div>
            <div><Link className="btn-lg color-acc-amber" to="/locations">Load Locations</Link></div>
        </div>
    );
}

export default NavBar;