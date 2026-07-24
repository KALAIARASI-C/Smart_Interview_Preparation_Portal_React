import "../css/Settings.css";

function Settings() {
  return (
    <div className="settings-page">

      <h1>Settings</h1>

      <div className="settings-container">

        <div className="setting-card">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="setting-card">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="setting-card">
          <label>New Password</label>
          <input type="password" placeholder="Enter new password" />
        </div>

        <div className="setting-card">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" />
        </div>

        <button className="save-btn">Save Changes</button>

      </div>

    </div>
  );
}

export default Settings;