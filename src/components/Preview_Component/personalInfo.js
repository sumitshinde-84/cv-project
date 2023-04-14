import React from "react";
import "./style/personalInfoPreview.css"
class PersonalInfoPreveiw extends React.Component{

constructor(props){
    super()
}

render(){
    const {profile,address,phoneNumber,email} = this.props
    return(
        <div className="personalInfoPreview">
            <div className="profile">
                <img src={profile} alt="profile"/>
            </div>
            <div className="PersonDetails">
                <div className="personalDetailDivForBottomBorder">
                <h3>Personal Details</h3>
                </div>
                <p id="address" className="personalDetailsSubInfoTitle">Address</p>
                <p>{address}</p>
                <p id="phoneNumberInpreview" className="personalDetailsSubInfoTitle">Phone Number</p>
                <p>{phoneNumber}</p>
                <p id="EmailInPreview" className="personalDetailsSubInfoTitle">Email</p>
                <p>{email}</p>
            </div>
        </div>
    )

}


}

export default PersonalInfoPreveiw;