import React from "react";
import Education from "./Form_Component/education";
import "./styles/Form.css";
import Experience from "./Form_Component/experience.js";
import PersonlInfo from "./Form_Component/personalInfo";
import Preview from "./preview";

class Form extends React.Component {
  constructor(props) {
    super(props);
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

  onChangeInputPersonalInfo = (event) => {
    this.setState(
      {
        personalInfo: {
          ...this.state.personalInfo,
          [event.target.name]: event.target.value,
        },
      },
      () => {
        this.props.onChangeHandler(this.state);
      }
    );
  };

  onChangeInputExperience = (event, experienceId) => {
    const { name, value } = event.target;
    const updatedExperienceCollection = [...this.state.experienceCollection];
    updatedExperienceCollection[experienceId] = {
      ...updatedExperienceCollection[experienceId],
      [name]: value,
    };
    this.setState(
      {
        experienceCollection: updatedExperienceCollection,
      },
      () => {
        this.props.onChangeHandler(this.state);
        console.log(this.state)
      }
    );
  };

  onChangeInputEducation=(event,educationId)=>{
    const {name,value} = event.target;
    const updatedEducationCollection = [...this.state.educationCollection];
    updatedEducationCollection[educationId]={
        ...updatedEducationCollection[educationId],
        [name]:value
    };
    this.setState({
        educationCollection:updatedEducationCollection,

    },()=>{
        this.props.onChangeHandler(this.state)
  })


  }


  handleEducationSect =()=>{

    this.setState((prevState)=>({
        educationCount:[...prevState.educationCount,prevState.educationCount.length],
        educationCollection:[
             ...prevState.educationCollection,
            {
                university:'',
                city:'',
                degree:'',
                subject:'',
                from:'',
                to:''
          },
        ],
    }),()=>{
        this.props.onChangeHandler(this.state)
  })


  }

  handleExperienceSect = () => {

    this.setState((prevState) => ({
      experienceSectCount: [...prevState.experienceSectCount, prevState.experienceSectCount.length],
      experienceCollection: [
        ...prevState.experienceCollection,
        {
          position: "",
          company: "",
          from: "",
          to: "",
        },
      ],
    }),() => {
        this.props.onChangeHandler(this.state);
        console.log(this.state)
      });

    
  };

  render() {
    return (
      <div className="Form">
        <PersonlInfo personalInfo={this.state.personalInfo} onChangeInputPersonalInfo={this.onChangeInputPersonalInfo} />

        {this.state.experienceSectCount.map((experienceId) => (
          <Experience
            key={experienceId}
            experience={this.state.experienceCollection[experienceId]}
            onChangeInputExperience={(event) => this.onChangeInputExperience(event, experienceId)}
            experienceId={experienceId}
          />
        ))}
        <button onClick={this.handleExperienceSect} className="add">
          Add
        </button>
        <button className="delete">Delete</button>

        {
            this.state.educationCount.map(educationId=>(
                <Education key={educationId} 
                    education={this.state.educationCollection[educationId]}
                    onChangeInputEducation={(event)=>this.onChangeInputEducation(event,educationId)}
                    educationId={educationId}
                />
            ))
        }
       
        <button onClick={this.handleEducationSect} className="add">Add</button>
        <button className="delete">Delete</button>
        <div className="buttons-sect">
          <button className="Genrate">Generate PDF</button>
          <button className="LoadExample">Load Example</button>
          <button className="Reset">Reset</button>
        </div>
      </div>
    );
  }
}

export default Form;
