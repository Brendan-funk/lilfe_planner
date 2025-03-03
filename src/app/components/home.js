import React from "react";
import stylesheet from "./home.module.scss"

export default function Home () {

    return(
        <div className={stylesheet.body}>
            <div className={stylesheet.overview}>
                <h1>This is the Overview Tab</h1>
            </div>
            <div className={stylesheet.glance}>
                <div className={stylesheet.budget}>
                    <h1>This will show the +/- of the budget</h1>
                    <p>EX: You are currently 200 above budget</p>
                </div>
                <div className={stylesheet.schedule}>
                    <h1>This will show the overview of the schedule for the day</h1>
                    <p>EX: 1pm-2pm Dentist Appointment</p>
                </div>
            </div>
        </div>
    );
}