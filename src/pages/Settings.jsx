import React, { useState, useEffect } from "react";
import "./Settings.css";

export const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: localStorage.getItem("darkMode") === "true",
    notifications: true,
    language: "English",
  });

  useEffect(() => {
    if (settings.darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [settings.darkMode]);

  const handleToggle = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.checked });
  };

  const handleInputChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Settings saved successfully! ✅");
  };

  return (
    <div className="settings-container">
      <h2>⚙️ Settings</h2>

      {/* Dark Mode */}
      <div className="setting-option">
        <label>🌙 Dark Mode</label>
        <input
          type="checkbox"
          name="darkMode"
          checked={settings.darkMode}
          onChange={handleToggle}
        />
      </div>

      {/* Notifications */}
      <div className="setting-option">
        <label>🔔 Enable Notifications</label>
        <input
          type="checkbox"
          name="notifications"
          checked={settings.notifications}
          onChange={handleToggle}
        />
      </div>

      {/* Language Selection */}
      <div className="setting-option">
        <label>🌐 Language</label>
        <select
          name="language"
          value={settings.language}
          onChange={handleInputChange}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>

      {/* Save Button */}
      <button className="save-btn" onClick={handleSave}>
        💾 Save Settings
      </button>
    </div>
  );
};
