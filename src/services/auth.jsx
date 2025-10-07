import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    // // Save token in localStorage
    // if (response.data.token) {
    //   localStorage.setItem("token", response.data.token);
    // }
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

