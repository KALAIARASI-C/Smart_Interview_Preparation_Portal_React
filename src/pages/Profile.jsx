import "../css/Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-card">

        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-image"
        />

        <h2>Kalaiarasi C</h2>
        <p>B.Tech Information Technology</p>

        <div className="profile-details">
          <p><strong>Email:</strong> kalaiarasi@example.com</p>
          <p><strong>College:</strong> Nehru Institute of Engineering and Technology</p>
          <p><strong>Course:</strong> Full Stack Java</p>
          <p><strong>Progress:</strong> 65%</p>
        </div>

        <button>Edit Profile</button>

      </div>

    </div>
  );
}

export default Profile;