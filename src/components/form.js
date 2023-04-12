import React from "react";
import Education from "./Form_Component/education";
import "./styles/Form.css"
import "./Form_Component/experience"
import Experience from "./Form_Component/experience";
class Form extends React.Component{


render(){


    return(
        <div className="Form">
            <Education/>
            <Experience/>
        </div>

    )
}







}


export default Form