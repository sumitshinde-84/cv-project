import React from "react";
import Form from "./components/form";
import Preview from "./components/preview";
import "./styles/App.css"
import jsPDF from 'jspdf';
import ReactDOM from 'react-dom';
import html2canvas from "html2canvas";

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      personalInfo: {
        firstName: "Sumit",
        lastName: "Shinde",
        title: "Frontend Developer",
        address:"Ganesh Nagar ,Diva",
        profile: "https://avatars.githubusercontent.com/u/110285294?v=4",
        phone: "+91 8422008724",
        email: "shindesumit217@gmail.com",
        description: " A frontend developer is a professional who specializes in creating user interfaces (UI) and user experiences (UX) for websites, web applications, and other digital products. They are responsible for designing and implementing the visual and interactive elements of a website or application, with a focus on making it engaging, responsive, and user-friendly.",
      },
      experienceCollection: [
        {
          position: "Frontend Developer",
          company: "Acquire pvt ltd",
          from: "2020",
          to: "2022",
        },
      ],
      educationCollection:[
        {
            university:'Ramanand Arya D.A.V College',
            city:'Bhandup',
            degree:'Bsc',
            subject:'Information Tech',
            from:'2021',
            to:'2023'
      },

      ],
      educationCount:[0],
      experienceSectCount: [0],
    };

    this.childComponent1Ref = React.createRef();
  }

  genratePdf = () => {
    const element = document.querySelector(".preview");
    const pdfWidth = element.offsetWidth;
    const pdfHeight = element.offsetHeight;
    const pdf = new jsPDF("p", "pt", [pdfWidth, pdfHeight]);
  
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  
      pdf.save("document.pdf");
    });
  };

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
            <h1 id="Main-title">CV CREATOR</h1>
        </header>
        <div className="Form-preview-container">
          
          <Form genratePdf={this.genratePdf} onChangeHandler={this.onChangeHandler}  />
          <Preview   personalInfo={this.state.personalInfo}  experienceCollection={this.state.experienceCollection} educationCollection={this.state.educationCollection}  />
        </div>
      </div>
    )
  }
}

export default App;
