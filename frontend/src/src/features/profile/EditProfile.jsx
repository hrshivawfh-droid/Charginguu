import "./EditProfile.css";
import { useState } from "react";

const EditProfile = ({ goBack }) => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="edit-profile">

      <div className="edit-header">
        <span onClick={goBack}>←</span>
        <h3>Edit Profile</h3>
      </div>

      <div className="avatar-section">
        <img src={photo || "https://i.pravatar.cc/150"} alt="avatar" />
        <label className="upload-btn">
          Upload Photo
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handlePhotoChange}
            hidden
          />
        </label>
      </div>

      <div className="form">
        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <input placeholder="Phone Number" />
        <input placeholder="Gender" />
        <input placeholder="Age" />
      </div>

      <button className="save-btn">Save Changes</button>
    </div>
  );
};

export default EditProfile;