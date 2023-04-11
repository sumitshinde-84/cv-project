import React from "react";
import "./style/education.css"

class Education extends React.Component{





render(){


    return(
        <div className="education">
            <h2>Education</h2>
            <input type="text" className="input" id="FirstName" placeholder="First Name"/>
            <input type="text" className="input" id="LastName" placeholder="Last Name"/>
            <input type="text" className="input" id="Title" placeholder="Title"/>
            <input class="custom-file-input" type="file"/>
            <input type="text" className="input" id="Address" placeholder="Address"/>
            <input type="tel" className="input" id="Phone" placeholder="Phone number"/>
            <input type="email" className="input" id="Email" placeholder="Email"/>
            <input type="text" className="input" id="Description" placeholder="Description"/>
        </div>
    )
}



}


export default Education