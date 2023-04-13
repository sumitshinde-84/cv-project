import React from "react";
import "./style/educationPreview.css"

class EducationPreview extends React.Component{

constructor(props){
    super()
}


render(){

    const {from, to ,university,subject,degree} = this.props
return (
    
    <div className="educationPreview">
       
        <div className="educationTabel">
            <div className="TimeFrame">
                <p id="timeFrameEducation">{from +"-"+ to}</p>
            </div>
            <div className="universityAndDegree">
                <p id="universityPreview">{university}</p>
                <p id="degreePreview">{degree}</p>
                <p id="subjectPreview">{subject}</p>
            </div>
        </div>
    </div>

)


}


}

export default EducationPreview