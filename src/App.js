import { useState } from "react";
import Form from "./components/form";
import Preview from "./components/preview";
import "./styles/App.css"
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";

const App = ()=>{

  const [personalInfo,setPersonalInfo] = useState( {
    firstName: "",
    lastName: "",
    address:"",
    title: "",
    profile: "",
    phone: "",
    email: "",
    description: "",
  })

  const [experienceCollection,setExperienceCollection] = useState(
    [
      {
        position: "sss",
        company: "f",
        from: "ffff",
        to: "fffff",
      },
    ]
  )

  const [educationCollection,setEducationCollection] = useState(
    [{
          university:'',
          city:'',
          degree:'',
          subject:'',
          from:'',
          to:''
    },]
  )

  const [educationCount,setEducationCount] = useState([0])
  const [experienceSectCount,setExperienceSectCount] = useState([0])

 const genratePdf = () => {
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

 const onChangeHandler=(personalInfo,educationCollection,educationCount,experienceCollection,experienceSectCount)=>{
   setPersonalInfo({...personalInfo})
   setExperienceCollection([...experienceCollection])
   setEducationCollection([...educationCollection])
   setEducationCount([...educationCount])
   setExperienceSectCount([...experienceSectCount])
  }


    return(
      <div className="main">
        <header>
            <h1 id="Main-title">CV CREATOR</h1>
        </header>
        <div className="Form-preview-container">
          
          <Form genratePdf={genratePdf} onChangeHandler={onChangeHandler}  />
          <Preview   personalInfo={personalInfo}  experienceCollection={experienceCollection} educationCollection={educationCollection}  />
        </div>
      </div>
    )
  }

export default App;
