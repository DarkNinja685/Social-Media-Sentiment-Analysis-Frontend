import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ResetPassword.css"; // <-- import the CSS file here

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword.length < 6 || newPassword.length > 12) {
      setError("Password must be between 6 and 12 characters.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/user/reset-password",
        {
          token,
          password: newPassword,
        }
      );

      setMessage(response.data.message || "Password updated successfully!");
      setError("");

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("Error:", err);
      setMessage("");
      setError(err.response?.data?.message || "Error updating password.");
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h2 className="reset-title">Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="reset-input"
            required
          />
          <button type="submit" className="reset-button">
            Reset Password
          </button>
        </form>

        {message && <p className="reset-message success-message">{message}</p>}
        {error && <p className="reset-message error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
