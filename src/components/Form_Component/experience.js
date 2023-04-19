import "./style/experience.css"

const Experience =({experience,onChangeInputExperience,experienceId})=>{

    console.log(experience)
    return(
        <div className="experience">
            <h2>Experience</h2>
            <input className="input" type="text" id={experienceId} name="position" placeholder="Postition" value={experience.position} onChange={(event)=>{onChangeInputExperience(event,experienceId)}}/>
            <input className="input" type="text"  id={experienceId} name="company" placeholder="Company" value={experience.company} onChange={(event)=>{onChangeInputExperience(event,experienceId)}}/>
            <input className="input" type="text"  id={experienceId} name="from" placeholder="From" value={experience.from} onChange={(event)=>{onChangeInputExperience(event,experienceId)}}/>
            <input className="input" type="text"  id={experienceId} name="to" placeholder="To" value={experience.to} onChange={(event)=>{onChangeInputExperience(event,experienceId)}}/>
        </div>
    )
}

export default Experience;


