import React from "react";
import Form from "./components/form";
import Preview from "./components/preview";
import "./styles/App.css"

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      personalInfo: {
        firstName: "",
        lastName: "",
        title: "",
        profile: "",
        phone: "",
        email: "",
        description: "",
      },
      experienceCollection: [
        {
          position: "",
          company: "",
          from: "",
          to: "",
        },
      ],
      educationCollection:[
        {
            university:'',
            city:'',
            degree:'',
            subject:'',
            from:'',
            to:''
      },

      ],
      educationCount:[0],
      experienceSectCount: [0],
    };
  }


  onChangeHandler=(obj)=>{
    this.setState({
      
       ...obj
      
    })
  }

render(){
  console.log(this.state.personalInfo)
  return(
    <div className="main">
      <header>
          <h1 id="Main-title">CV CREATER</h1>
      </header>
      <div className="Form-preview-container">
      <Form onChangeHandler={this.onChangeHandler} />
      <Preview personalInfo={this.state.personalInfo}  experienceCollection={this.state.experienceCollection} educationCollection={this.state.educationCollection}/>
      </div>
      

    </div>
  )

}


}


export default App