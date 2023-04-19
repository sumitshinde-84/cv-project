import { useEffect, useState } from "react";
import Education from "./Form_Component/education";
import "./styles/Form.css";
import Experience from "./Form_Component/experience.js";
import PersonlInfo from "./Form_Component/personalInfo";


const Form = ({onChangeHandler,genratePdf})=> {

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
        position: "",
        company: "",
        from: "",
        to: "",
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

    useEffect(()=>{
      onChangeHandler(personalInfo,educationCollection,educationCount,experienceCollection,experienceSectCount)
       
    },[personalInfo,educationCollection,educationCount,experienceCollection,experienceSectCount])
 
 const onChangeInputPersonalInfo = (event) => {
    if(event.target.name==='profile'){
      let file = event.target.files[0]
      let imgUrl = URL.createObjectURL(file)
      setPersonalInfo({
        ...personalInfo,
         profile:imgUrl
      })
    }else{
    setPersonalInfo( {
          ...personalInfo,
          [event.target.name]: event.target.value,
         }
    )}
  }

 const onChangeInputExperience = (event, experienceId) => {
    const { name, value } = event.target;
    const updatedExperienceCollection = [...experienceCollection];
    updatedExperienceCollection[experienceId] = {
      ...updatedExperienceCollection[experienceId],
      [name]: value,
    };
    setExperienceCollection(updatedExperienceCollection);
  };

  const onChangeInputEducation = (event, educationId) => {
    const { name, value } = event.target;
    const updatedEducationCollection = [...educationCollection];
    updatedEducationCollection[educationId] = {
      ...updatedEducationCollection[educationId],
      [name]: value,
    };
    setEducationCollection(updatedEducationCollection);
  }

 const handleEducationSect =()=>{

      setEducationCount([...educationCount,educationCount.length]);
       setEducationCollection([
             ...educationCollection,
            {
                university:'',
                city:'',
                degree:'',
                subject:'',
                from:'',
                to:''
          },
        ])
  }

 const handleExperienceSect = () => {

    setExperienceSectCount([...experienceSectCount,experienceSectCount.length])
     setExperienceCollection([
        ...experienceCollection,
        {
          position: "",
          company: "",
          from: "",
          to: "",
        },
      ]);

    
  };
  

const deleteExperienceSect = () => {
   setExperienceSectCount(prevState=>prevState.slice(0,-1))
  setExperienceCollection(prevState=>prevState.slice(0,-1))
}

const deleteEducationSect = ()=>{
        setEducationCount(prevState=>prevState.slice(0,-1))
        setEducationCollection(prevState=>prevState.slice(0,-1))
    }

const loadExample = ()=>{
  setPersonalInfo({
    firstName: "Sumit",
    lastName: "Shinde",
    title: "Frontend Developer",
    address:"Ganesh Nagar ,Diva",
    profile: "https://avatars.githubusercontent.com/u/110285294?v=4",
    phone: "+91 8422008724",
    email: "shindesumit217@gmail.com",
    description: " A frontend developer is a professional who specializes in creating user interfaces (UI) and user experiences (UX) for websites, web applications, and other digital products. They are responsible for designing and implementing the visual and interactive elements of a website or application, with a focus on making it engaging, responsive, and user-friendly.",
  })

  setExperienceCollection([
    {
      position: "Frontend Developer",
      company: "Acquire pvt ltd",
      from: "2020",
      to: "2022",
    },
  ])
  setEducationCollection([{
    university:'Ramanand Arya D.A.V College',
    city:'Bhandup',
    degree:'Bsc',
    subject:'Information Tech',
    from:'2021',
    to:'2023'
},])
}

const Reset = ()=>{
  setPersonalInfo({
    firstName: "",
    lastName: "",
    title: "",
    address:"",
    profile: "",
    phone: "",
    email: "",
    description: "",
  })

  setExperienceCollection([
    {
      position: "",
      company: "",
      from: "",
      to: "",
    },
  ])
  setEducationCollection([{
    university:'',
    city:'',
    degree:'',
    subject:'',
    from:'',
    to:''
},])
setEducationCount([0])
setExperienceSectCount([0])
}

     return (

      <div className="Form">
        <PersonlInfo personalInfo={personalInfo} onChangeInputPersonalInfo={onChangeInputPersonalInfo} />

        {experienceSectCount.map((experienceId) => (
          <Experience
            key={experienceId}
            experience={experienceCollection[experienceId]}
            onChangeInputExperience={(event) => onChangeInputExperience(event, experienceId)}
            experienceId={experienceId}
          />
        ))}
        <button onClick={handleExperienceSect} className="add">
          Add
        </button>
        <button onClick={deleteExperienceSect} className="delete">Delete</button>

        {
           educationCount.map(educationId=>(
                <Education key={educationId} 
                    education={educationCollection[educationId]}
                    onChangeInputEducation={(event)=>onChangeInputEducation(event,educationId)}
                    educationId={educationId}
                />
            ))
        }
        <button onClick={handleEducationSect} className="add">Add</button>
        <button onClick={deleteEducationSect} className="delete">Delete</button>
        <div className="buttons-sect">
          <button onClick={genratePdf} className="Genrate">Generate PDF</button>
          <button onClick={loadExample} className="LoadExample">Load Example</button>
          <button onClick={Reset} className="Reset">Reset</button>
        </div>
      </div>
    );
  }

export default Form;
