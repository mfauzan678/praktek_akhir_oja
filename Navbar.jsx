import React from "react";
import "./navbar.css"

export function Navbar() {
    return (
        <>
            <header>
                {/* <img src="image/logo.svg" height="60px" alt="logo" /> */}
                <h2 id="logo-text">Hidang</h2>
                    <nav>
                        <ul className="nav__links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Top Recipes</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                    <a className="cta" href="#"><button>Contact</button></a>
            </header>
        </>
    )
}