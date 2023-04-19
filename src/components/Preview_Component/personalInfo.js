import "./style/personalInfoPreview.css";
const PersonalInfoPreveiw = ({ profile, address, phoneNumber, email }) => {

    return (
    <div className="personalInfoPreview">
      <div className="profile">
        <img src={profile} alt="profile" />
      </div>
      <div className="PersonDetails">
        <div className="personalDetailDivForBottomBorder">
          <h3>Personal Details</h3>
        </div>
        <p id="address" className="personalDetailsSubInfoTitle">
          Address
        </p>
        <p>{address}</p>
        <p id="phoneNumberInpreview" className="personalDetailsSubInfoTitle">
          Phone Number
        </p>
        <p>{phoneNumber}</p>
        <p id="EmailInPreview" className="personalDetailsSubInfoTitle">
          Email
        </p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default PersonalInfoPreveiw;
