import "./styles/Preview.css";
import Header from "./Preview_Component/header";
import PersonalInfoPreveiw from "./Preview_Component/personalInfo";
import DescriptionPreview from "./Preview_Component/DescriptionPreview";
import ExperiencePreview from "./Preview_Component/ExperiencePreview";
import EducationPreview from "./Preview_Component/EducationPreview";
import { v4 as uuidv4 } from 'uuid';

const Preview =({personalInfo, experienceCollection,educationCollection })=> {
    
  
  return (
      <div  className="preview" >
        <Header firstName={personalInfo.firstName} lastName={personalInfo.lastName} title={personalInfo.title} profile={personalInfo.photo} />
        <PersonalInfoPreveiw profile={personalInfo.profile} address={personalInfo.address} phoneNumber={personalInfo.phone} email={personalInfo.email} />
        <div className="otherInfo">

          {/* Description section */}
          <div className="DescriptionPreviewMain">
            <div className="DescriptionPreviewBoxForBorder">
              <h3>Description</h3>
            </div>
            <DescriptionPreview description={personalInfo.description} />
          </div>

          {/* Experience section */}
          <div className="ExperiencePreviewMain">
            <div className="experiencePreviewBoxBorder">
              <h3>Experience</h3>
            </div>
           
          { experienceCollection.map(experience=>(
            <ExperiencePreview key={uuidv4()} from={experience.from} to={experience.to} position={experience.position} company={experience.company} />
           ))}
 
          </div>
        </div>
        {/* Education section */}
        <div className="educationPreviewMain">
          <div className="educationPreviewBoxBorder">
            <h3>Education</h3>
          </div>
          {educationCollection.map(education=>(
             <EducationPreview key={uuidv4()} from={education.from} to={education.to} university={education.university} degree={education.degree} subject={education.subject} city={education.city} />
          ))}
        </div>
      </div>
    )
  }


export default Preview;
