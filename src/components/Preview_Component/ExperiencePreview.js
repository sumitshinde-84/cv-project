import React from "react";
import "./style/experiencePreview.css"

class ExperiencePreview extends React.Component{

constructor(props){
    super()
}


render(){

    const {from, to ,position,company} = this.props
return (
    
    <div className="experiencePreview">
       
        <div className="experienceTabel">
            <div className="TimeFrame">
                <p id="timeFrame">{from +"-"+ to}</p>
            </div>
            <div className="companyAndPosition">
                <p id="positionPreview">{position}</p>
                <p id="companyPreview">{company}</p>
            </div>
        </div>
    </div>

)


}


}

export default ExperiencePreview