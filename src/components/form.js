import React from "react";
import  Education from "./Form_Component/education";
import "./styles/Form.css"
import "./Form_Component/experience"
import Experience from "./Form_Component/experience";
import PersonlInfo from "./Form_Component/personalInfo";



class Form extends React.Component{


render(){


    return(
        <div className="Form">

            <PersonlInfo/>
            <Experience/>
            <Education/>
            <div className="buttons-sect">
            <button className="Genrate">Genrate PDF</button>
            <button className="LoadExample">Load Example</button>
            <button className="Reset">Reset</button>
            </div>
        </div>

    )
}







}


export default Form