import axios from "axios";
export default {
  async register({ commit }, userData) {
    try {
      const response = await axios.post("/api/auth/register", userData);
      if (response.status === 200) {
        console.log('Registered')
      } else {
        console.log('cant Register')
      }
    } catch (error) {
      console.error("Registration error:", error);
      return { error: "Network error" };
    }
  },
};
