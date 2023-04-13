import React from "react";
import "./styles/Preview.css"
import Header from "./Preview_Component/header";
import PersonalInfoPreveiw from "./Preview_Component/personalInfo";
import DescriptionPreview from "./Preview_Component/DescriptionPreview";

class Preview extends React.Component{



render(){
    return(
        <div className="preview">
            <Header firstName="Sumit" lastName="Shinde" position="Frontend Developer" profile="../Images/sumit.jpeg"/>
            <PersonalInfoPreveiw  profile={require("./sumit.jpeg")} address="Ganesh nagar , Thane" phoneNumber="+91 8422008724" email="shindesumit217@gmail.com" />
            <DescriptionPreview description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus."/>
      
        </div>
      
    )
}




}

export default Preview