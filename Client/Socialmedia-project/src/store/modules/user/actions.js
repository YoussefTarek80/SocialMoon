import axios from "axios";
export default {
  async fetchUserData({ commit }) {
    try {
      const user = localStorage.getItem("UserId");
      const response = await axios.get(
        `http://localhost:3000/api/user/data/${user}`
      );

      if (response.status === 200) {
        commit("SET_USER_DATA", response.data);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  },
};
