// frontend/pages/GoogleCallback.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (!code) {
      console.error("No code received from Google");
      setShowLoading(false);
      return;
    }

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/userService/user/auth/google`, { code }, { withCredentials: true })
      .then((res) => {
        localStorage.setItem("sessionId", res.data.id);
        // Optionally set user state here
        navigate("/"); // redirect to home
      })
      .catch((err) => console.error(err.response?.data?.message || err.message))
      .finally(() => setShowLoading(false));
  }, []);

  return showLoading ? <div>Logging in with Google...</div> : null;
};

export default GoogleCallback;