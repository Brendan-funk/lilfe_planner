import React from "react"
import stylesheet from "./nav.module.scss"


export default function Nav (){
    return (
        <div className={stylesheet.title}>
            <h1>Life Planner</h1>
            <nav className={stylesheet.nav}>
            <button>Schedule</button>
            <button>Finances</button>
            <button>Daily Things</button>
            </nav>
        </div>
    );
}