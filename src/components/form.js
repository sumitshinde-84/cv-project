import React from "react";
import Education from "./Form_Component/education";
import "./styles/Form.css";
import Experience from "./Form_Component/experience.js";
import PersonlInfo from "./Form_Component/personalInfo";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {

        firstName: "",
        lastName: "",
        address:"",
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
    if(event.target.name==='profile'){
      let file = event.target.files[0]
      let imgUrl = URL.createObjectURL(file)
      this.setState(
        {personalInfo:{
        ...this.state.personalInfo,
        profile:imgUrl
      }},()=>{this.props.onChangeHandler(this.state)})
    }else{
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
    )}
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
  

deleteExperienceSect = () => {
    let experienceSectCount = [...this.state.experienceSectCount];
    let experienceCollection = [...this.state.experienceCollection];

    experienceCollection.pop();
    experienceSectCount.pop();

    this.setState({
        experienceCollection: experienceCollection,
        experienceSectCount: experienceSectCount
    }, () => {
        this.props.onChangeHandler(this.state);
    });
    
}

    deleteEducationSect = ()=>{
        let educationCount = [...this.state.educationCount]
        let educationCollection = [...this.state.educationCollection];
        educationCount.pop()
        educationCollection.pop()
        this.setState(
          {
            educationCollection:educationCollection,
            educationCount:educationCount
          }
        ,()=>{this.props.onChangeHandler(this.state)})
    }

  render() {
    const {genratePdf} = this.props
    
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
        <button onClick={this.deleteExperienceSect} className="delete">Delete</button>

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
        <button onClick={this.deleteEducationSect} className="delete">Delete</button>
        <div className="buttons-sect">
          <button onClick={genratePdf} className="Genrate">Generate PDF</button>
          <button className="LoadExample">Load Example</button>
          <button className="Reset">Reset</button>
        </div>
      </div>
    );
  }
}

export default Form;
