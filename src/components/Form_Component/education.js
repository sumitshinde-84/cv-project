import React from "react";
import "./style/education.css"

class Education extends React.Component{


render(){


    return(
        <div className="education">
            <h2>Education</h2>
          <input className="input"  id="Univercity_name" type="text" placeholder="University Name"/>
          <input className="input"  id="City" type="text" placeholder="City"/>
          <input className="input"  id="Degree" type="text" placeholder="Degree"/>
          <input className="input"  id="Subject" type="text" placeholder="Subject"/>
          <input className="input"  id="From" type="text" placeholder="From"/>
          <input className="input"  id="To" type="text" placeholder="To"/>
          <button className="add">Add</button>
          <button className="delete">Delete</button>
        </div>
    )
}



}


export default Education