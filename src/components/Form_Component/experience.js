import React from "react";
import "./style/experience.css"

class Experience extends React.Component{







render(){

    return(
        <div className="experience">
            <h2>Experience</h2>
            <input className="input" type="text" id="position" placeholder="Postition"/>
            <input className="input" type="text" id="Company" placeholder="Company"/>
            <input className="input" type="text" id="From" placeholder="From"/>
            <input className="input" type="text" id="To" placeholder="To"/>
            <button className="add">Add</button>
            <button className="delete">Delete</button>
           

        </div>
    )
}



}

export default Experience;


