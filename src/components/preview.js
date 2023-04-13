import React from "react";
import "./styles/Preview.css"
import Header from "./Preview_Component/header";
import PersonalInfoPreveiw from "./Preview_Component/personalInfo";
import DescriptionPreview from "./Preview_Component/DescriptionPreview";
import ExperiencePreview from "./Preview_Component/ExperiencePreview";
import EducationPreview from "./Preview_Component/EducationPreview";
class Preview extends React.Component{



render(){
    return(
        <div className="preview">
            <Header firstName="Sumit" lastName="Shinde" position="Frontend Developer" profile="../Images/sumit.jpeg"/>
            <PersonalInfoPreveiw  profile={require("./sumit.jpeg")} address="Ganesh nagar , Thane" phoneNumber="+91 8422008724" email="shindesumit217@gmail.com" />
            <div className="otherInfo">

                {/* Description section */}
            <div className="DescriptionPreviewMain">
            <div className="DescriptionPreviewBoxForBorder"> 
            <h3>Description</h3>
            </div>
            <DescriptionPreview description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus."/>
            </div>    

            {/* Experience section */}
            <div className="ExperiencePreviewMain">
            <div className="experiencePreviewBoxBorder">
            <h3>Experience</h3>
            </div>
            <ExperiencePreview from="2015" to="2018" company="Goldman Sach" position="Frontend Developer" />
            </div>
            </div>
            {/*education section  */}
            <div className="educationPreviewMain">
            <div className="educationPreviewBoxBorder">
            <h3>Education</h3>
            </div>
            <EducationPreview from="2015" to="2018" university="Ramanand Arya D.A.V" degree="Bsc" subject="Information Technology" />
            </div>
           
        </div>
      
    )
}




}

export default Preview