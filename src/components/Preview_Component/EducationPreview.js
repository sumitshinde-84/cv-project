import "./style/educationPreview.css"

const EducationPreview =({from, to ,university,subject,degree,city})=>{

return (
    <div className="educationPreview">
        <div className="educationTabel">
            <div className="TimeFrame">
                <p id="timeFrameEducation">{from +"-"+ to}</p>
            </div>
            <div className="universityAndDegree">
                <p id="universityPreview">{university}{","+city}</p>
                <p id="degreePreview">{degree}</p>
                <p id="subjectPreview">{subject}</p>
            </div>
        </div>
    </div>

)}

export default EducationPreview