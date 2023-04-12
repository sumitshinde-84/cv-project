import React from "react";
import "./styles/Preview.css"
import Header from "./Preview_Component/header";
import PersonalInfoPreveiw from "./Preview_Component/personalInfo";

class Preview extends React.Component{



render(){
    return(
        <div className="preview">
            <Header firstName="Sumit" lastName="Shinde" position="Frontend Developer"/>
            <PersonalInfoPreveiw/>
        </div>
    )
}




}

export default Preview