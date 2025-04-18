import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProfilePage.css";

const ProfilePage = () => {
  const userId = localStorage.getItem("userId");

  const [userData, setUserData] = useState({
    username: "",
    contact: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    profilePic: "",
  });

  const [editing, setEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchUserData = () => {
    axios
      .get(`http://localhost:4000/user/profile/${userId}`)
      .then((res) => setUserData(res.data))
      .catch((err) => {
        console.error("Error fetching user profile:", err);
        toast.error("Failed to load profile");
      });
  };

  useEffect(() => {
    if (userId) fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["facebook", "twitter", "linkedin"].includes(name)) {
      setUserData((prev) => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [name]: value,
        },
      }));
    } else {
      setUserData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("profilePic", selectedFile);
    try {
      const res = await axios.post(
        "http://localhost:4000/user/upload",
        formData
      );
      toast.success("Image uploaded successfully!");
      return res.data.filePath;
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Image upload failed!");
      return userData.profilePic; // fallback
    }
  };

  const handleSave = async () => {
    let profilePicPath = userData.profilePic;

    if (selectedFile) {
      profilePicPath = await handleImageUpload();
    }

    try {
      await axios.put("http://localhost:4000/user/profile/update", {
        ...userData,
        userId,
        profilePic: profilePicPath,
      });
      toast.success("Profile updated successfully!");
      setEditing(false);
      setSelectedFile(null);
      fetchUserData(); // refresh data
    } catch (error) {
      console.error("Profile update failed:", error);
      toast.error("Profile update failed!");
    }
  };

  return (
    <div className="profile-wrapper">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-image-container">
            <img
              src={
                userData.profilePic
                  ? `http://localhost:4000/${userData.profilePic.replace(
                      /\\/g,
                      "/"
                    )}`
                  : "/default-avatar.png"
              }
              alt="Profile"
              className="profile-image"
            />
            {editing && (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="profile-upload"
              />
            )}
          </div>

          <div className="profile-fields">
            {["username", "contact"].map((field) => (
              <div key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                <input
                  name={field}
                  value={userData[field]}
                  onChange={handleChange}
                  disabled={!editing}
                  className="profile-input"
                />
              </div>
            ))}

            {["facebook", "twitter", "linkedin"].map((field) => (
              <div key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                <input
                  name={field}
                  value={userData.socialLinks?.[field] || ""}
                  onChange={handleChange}
                  disabled={!editing}
                  className="profile-input"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="profile-actions">
          <button
            className={`edit-btn ${editing ? "disabled" : ""}`}
            onClick={() => setEditing(true)}
            disabled={editing}
          >
            Edit
          </button>
          <button
            className={`save-btn ${!editing ? "disabled" : ""}`}
            onClick={handleSave}
            disabled={!editing}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
