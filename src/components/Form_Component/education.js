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
            <input type="text" className="input" id="Address" placeholder="Address"/>
          
            
        </div>
    )
}



}


export default Education