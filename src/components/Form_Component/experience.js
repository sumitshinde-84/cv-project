import "./style/experience.css"

const Experience=({experience,onChangeInputExperience,experienceId})=>{


    return(
        <div className="experience">
            <h2>Experience</h2>
            <input className="input" type="text" id={experienceId} name="position" placeholder="Postition" value={experience.position} onChange={(event)=>{onChangeInputExperience(event)}}/>
            <input className="input" type="text"  id={experienceId} name="company" placeholder="Company" value={experience.company} onChange={(event)=>{onChangeInputExperience(event)}}/>
            <input className="input" type="text"  id={experienceId} name="from" placeholder="From" value={experience.from} onChange={(event)=>{onChangeInputExperience(event)}}/>
            <input className="input" type="text"  id={experienceId} name="to" placeholder="To" value={experience.to} onChange={(event)=>{onChangeInputExperience(event)}}/>
        </div>
    )
}

export default Experience;


