import React from "react";
import './Home.css';

export function Home(){
    return(
        <div className="myContent">
            <section>
                <h2 className="myHeading">Welcome to Student Management System</h2>
                <p style={{'color' : 'white', 'display': 'block'}}>Here you can View, Add, Delete and Update student details</p>
            </section>
        </div>
            
    );
}