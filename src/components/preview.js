import React from "react";
import "./styles/Preview.css"
import Header from "./Preview_Component/header";
import PersonalInfoPreveiw from "./Preview_Component/personalInfo";

class Preview extends React.Component{



render(){
    return(
        <div className="preview">
            <Header firstName="Sumit" lastName="Shinde" position="Frontend Developer" profile="../Images/sumit.jpeg"/>
            <PersonalInfoPreveiw  profile={require("./sumit.jpeg")} address="Ganesh nagar , Thane" phoneNumber="+91 8422008724" email="shindesumit217@gmail.com" />
        </div>
    )
}




}

export default Preview