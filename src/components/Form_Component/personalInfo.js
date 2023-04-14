
import React from "react";
import Experience from "./experience";
import "./style/personal_info.css"

class PersonlInfo extends React.Component{

constructor(props){
    super()
}





render(){
    const {personalInfo,onChangeInputPersonalInfo} = this.props

    return(
        <div className="personal_info">
            <h2>Personl Information</h2>
            <input type="text" className="input" id="FirstName"  name="firstName" placeholder="First Name" value={personalInfo.firstName} onChange={(event) => onChangeInputPersonalInfo(event)} />           
            <input type="text" className="input" id="LastName"  name="lastName"placeholder="Last Name" value={personalInfo.lastName} onChange={(event) => onChangeInputPersonalInfo(event)}/>
            <input type="text" className="input" id="Title" placeholder="Title" name="title" value={personalInfo.title} onChange={(event)=>{onChangeInputPersonalInfo(event)}}/>
            <input  id="File" class="custom-file-input" type="file"    onChange={(event)=>{onChangeInputPersonalInfo(event)}} accept="image/jpeg image/png"/>
            <input type="text" className="input" id="Address"  name="address" placeholder="Address"  value={personalInfo.address} onChange={(event)=>{onChangeInputPersonalInfo(event)}}/>
            <input type="tel" className="input" id="Phone"  name="phone" placeholder="Phone number" value={personalInfo.phone} onChange={(event)=>{onChangeInputPersonalInfo(event)}}/>
            <input type="email" className="input" id="Email" name="email" placeholder="Email" value={personalInfo.email} onChange={(event)=>{onChangeInputPersonalInfo(event)}}/>
            <input type="text" className="input" id="Description" name="description" placeholder="Description" value={PersonlInfo.description} onChange={(event)=>{onChangeInputPersonalInfo(event)}}/>
            
        </div>
    )
}



}


export default PersonlInfo