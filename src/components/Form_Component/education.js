import React from "react";
import "./style/education.css"

class Education extends React.Component{


render(){

    const {education,educationId,onChangeInputEducation} = this.props
    return(
        <div className="education">
            <h2>Education</h2>
          <input className="input"  id={educationId} name="university" type="text"  placeholder="University Name" value={education.university} onChange={(event)=>{onChangeInputEducation(event)}}/>
          <input className="input"  id={educationId} type="text" name="city" placeholder="City"  value={education.city} onChange={(event)=>{onChangeInputEducation(event)}}/>
          <input className="input" id={educationId} type="text" name="degree" placeholder="Degree"  value={education.degree} onChange={(event)=>{onChangeInputEducation(event)}}/>
          <input className="input" id={educationId} type="text" name="subject" placeholder="Subject" value={education.subject} onChange={(event)=>{onChangeInputEducation(event)}}/>
          <input className="input"  id={educationId} type="text" name="from" placeholder="From" value={education.from} onChange={(event)=>{onChangeInputEducation(event)}}/>
          <input className="input"  id={educationId} type="text" name="to" placeholder="To" value={education.to} onChange={(event)=>{onChangeInputEducation(event)}}/>
          
        </div>
    )
}



}


export default Education