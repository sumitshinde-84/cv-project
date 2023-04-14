import React from "react";
import "./style/educationPreview.css"

class EducationPreview extends React.Component{

constructor(props){
    super()
}


render(){

    const {from, to ,university,subject,degree,city} = this.props
return (
    
    <div className="educationPreview">
       
        <div className="educationTabel">
            <div className="TimeFrame">
                <p id="timeFrameEducation">{from +"-"+ to}</p>
            </div>
            <div className="universityAndDegree">
                <p id="universityPreview">{university}{","+city}</p>
                <p id="degreePreview">{degree}</p>
                <p id="subjectPreview">{subject}</p>
            </div>
        </div>
    </div>

)


}


}

export default EducationPreview