import React from "react";
import "./index.css"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">LosMan Reviews</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                            <div className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Navigate
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="/disturbing">Disturbing Movies</a></li>
                                    <li><a className="dropdown-item" href="/greathorror">Great Horror</a></li>
                                    <li><a className="dropdown-item" href="/badhorror">Bad Horror Movies</a></li>
                                    <li><a className="dropdown-item" href="/facesofdeath">Faces of Death</a></li>
                                    <li><a className="dropdown-item" href="/slashers">Slasher City</a></li>
                                    <li><a className="dropdown-item" href="blackcomedies">Black Comedies</a></li>
                                    <li><a className="dropdown-item" href="/21sthorror">21st Century Horror</a></li>
                                    <li><a className="dropdown-item" href="https://web.archive.org/web/20020805004832/http://www.losman.com:80/">Old Website</a></li>
                                    <li><a className="dropdown-item" href="https://losmanhorror.blogspot.com/">Losman Blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;